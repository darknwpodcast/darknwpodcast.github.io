import { parseEncodedHashLink, fixEncodedHashLinks } from "./urlUtils";

describe("parseEncodedHashLink", () => {
  it("should parse encoded hash link with route and anchor", () => {
    const result = parseEncodedHashLink("#/about%23page-top");
    expect(result).toEqual({
      route: "#/about",
      anchor: "page-top",
    });
  });

  it("should parse encoded hash link for home route", () => {
    const result = parseEncodedHashLink("#/%23page-top");
    expect(result).toEqual({
      route: "#/",
      anchor: "page-top",
    });
  });

  it("should parse encoded hash link with nested route", () => {
    const result = parseEncodedHashLink("#/cast/details%23section");
    expect(result).toEqual({
      route: "#/cast/details",
      anchor: "section",
    });
  });

  it("should return original hash when no encoding present", () => {
    const result = parseEncodedHashLink("#/about");
    expect(result).toEqual({
      route: "#/about",
      anchor: null,
    });
  });

  it("should handle empty string", () => {
    const result = parseEncodedHashLink("");
    expect(result).toEqual({
      route: "",
      anchor: null,
    });
  });

  it("should handle null/undefined", () => {
    const result = parseEncodedHashLink(null);
    expect(result).toEqual({
      route: "",
      anchor: null,
    });
  });

  it("should handle hash with only encoded anchor", () => {
    const result = parseEncodedHashLink("#/episodes%23contact");
    expect(result).toEqual({
      route: "#/episodes",
      anchor: "contact",
    });
  });
});

describe("fixEncodedHashLinks", () => {
  let mockWindow;

  beforeEach(() => {
    mockWindow = {
      location: { hash: "" },
      history: {
        replaceState: jest.fn(),
      },
      addEventListener: jest.fn(),
      document: {
        getElementById: jest.fn(),
      },
      scrollTo: jest.fn(),
    };
  });

  it("should replace URL when encoded hash is present", () => {
    mockWindow.location.hash = "#/about%23page-top";

    fixEncodedHashLinks(mockWindow);

    expect(mockWindow.history.replaceState).toHaveBeenCalledWith(
      null,
      "",
      "#/about"
    );
  });

  it("should add load event listener when anchor is present", () => {
    mockWindow.location.hash = "#/about%23page-top";

    fixEncodedHashLinks(mockWindow);

    expect(mockWindow.addEventListener).toHaveBeenCalledWith(
      "load",
      expect.any(Function)
    );
  });

  it("should not modify URL when no encoding present", () => {
    mockWindow.location.hash = "#/about";

    fixEncodedHashLinks(mockWindow);

    expect(mockWindow.history.replaceState).not.toHaveBeenCalled();
  });

  it("should not add event listener when no anchor", () => {
    mockWindow.location.hash = "#/about";

    fixEncodedHashLinks(mockWindow);

    expect(mockWindow.addEventListener).not.toHaveBeenCalled();
  });

  it("should handle home route with encoded anchor", () => {
    mockWindow.location.hash = "#/%23page-top";

    fixEncodedHashLinks(mockWindow);

    expect(mockWindow.history.replaceState).toHaveBeenCalledWith(
      null,
      "",
      "#/"
    );
  });
});
