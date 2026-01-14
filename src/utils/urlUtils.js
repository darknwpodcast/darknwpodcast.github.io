/**
 * Parses a percent-encoded hash URL and returns the clean route and anchor.
 * 
 * Example: "#/about%23page-top" -> { route: "#/about", anchor: "page-top" }
 * 
 * @param {string} hash - The URL hash (e.g., "#/about%23page-top")
 * @returns {{ route: string, anchor: string | null }} The parsed route and anchor
 */
export function parseEncodedHashLink(hash) {
  if (!hash || !hash.includes("%23")) {
    return { route: hash || "", anchor: null };
  }

  const decoded = decodeURIComponent(hash);
  // decoded is now "#/about#page-top"
  // Split on the second # to get the route and anchor
  const firstHashIndex = decoded.indexOf("#");
  const secondHashIndex = decoded.indexOf("#", firstHashIndex + 1);

  let route = decoded;
  let anchor = null;

  if (secondHashIndex !== -1) {
    route = decoded.substring(0, secondHashIndex); // "#/about"
    anchor = decoded.substring(secondHashIndex + 1); // "page-top"
  }

  return { route, anchor };
}

/**
 * Fixes percent-encoded hash links in the current URL.
 * This handles URLs like "#/about%23page-top" that occur when double-hash URLs are shared.
 * 
 * @param {Window} windowObj - The window object (for testability)
 */
export function fixEncodedHashLinks(windowObj = window) {
  const hash = windowObj.location.hash;
  const { route, anchor } = parseEncodedHashLink(hash);

  if (hash.includes("%23")) {
    // Update URL without the anchor part (router handles the route)
    windowObj.history.replaceState(null, "", route);

    // Scroll to anchor after page loads
    if (anchor) {
      windowObj.addEventListener("load", () => {
        setTimeout(() => {
          const element = windowObj.document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            windowObj.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      });
    }
  }
}
