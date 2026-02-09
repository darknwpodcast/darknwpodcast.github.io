import React, { useEffect, useRef, useState, useCallback } from "react";
import mapLocations from "../data/mapLocations.json";

function PNWMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const isInitializedRef = useRef(false);
  const navControlRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isMapReady, setIsMapReady] = useState(false);

  const navigateToLocation = useCallback(
    (index) => {
      if (!mapInstanceRef.current || !markersRef.current.length) return;

      const wrappedIndex =
        ((index % mapLocations.length) + mapLocations.length) %
        mapLocations.length;
      setCurrentIndex(wrappedIndex);

      const marker = markersRef.current[wrappedIndex];
      const location = mapLocations[wrappedIndex];

      mapInstanceRef.current.setView([location.lat, location.lng], 10, {
        animate: true,
        duration: 0.5,
      });

      markersRef.current.forEach((m) => m.closePopup());
      marker.openPopup();
    },
    []
  );

  const handlePrevious = useCallback(() => {
    const newIndex = currentIndex <= 0 ? mapLocations.length - 1 : currentIndex - 1;
    navigateToLocation(newIndex);
  }, [currentIndex, navigateToLocation]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex >= mapLocations.length - 1 ? 0 : currentIndex + 1;
    navigateToLocation(newIndex);
  }, [currentIndex, navigateToLocation]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isMapReady) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (currentIndex === -1) {
          navigateToLocation(0);
        }
      }
    },
    [isMapReady, currentIndex, handlePrevious, handleNext, navigateToLocation]
  );

  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const L = window.L;
      if (!L) return;

      const pnwCenter = [49.276926732674355, -122.8490206310808];
      const map = L.map(mapRef.current).setView(pnwCenter, 5);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      const darkIcon = L.divIcon({
        className: "pnw-map-marker",
        html: `<i class="fa-solid fa-ghost pnw-ghost-marker"></i>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28],
      });

      const markers = [];
      mapLocations.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng], {
          icon: darkIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div class="pnw-popup">
            <h4 class="pnw-popup-title">${location.title}</h4>
            <p class="pnw-popup-subtitle">${location.subtitle}</p>
          </div>
        `);

        marker.on("click", () => {
          setCurrentIndex(index);
        });

        markers.push(marker);
      });

      markersRef.current = markers;
      mapInstanceRef.current = map;
      setIsMapReady(true);
    };

    const loadLeaflet = () => {
      if (!document.querySelector('link[href*="leaflet"]')) {
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        linkEl.integrity =
          "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        linkEl.crossOrigin = "";
        document.head.appendChild(linkEl);
      }

      if (window.L) {
        initMap();
        return;
      }

      if (!document.querySelector('script[src*="leaflet"]')) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
          "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.onload = initMap;
        document.body.appendChild(script);
      } else {
        const checkLeaflet = setInterval(() => {
          if (window.L) {
            clearInterval(checkLeaflet);
            initMap();
          }
        }, 50);
      }
    };

    loadLeaflet();
  }, []);

  const currentLocation = currentIndex >= 0 ? mapLocations[currentIndex] : null;

  return (
    <section className="pnw-map-section" id="map">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-white mb-4 text-center">
              Explore the Pacific Northwest
            </h2>
            <p className="text-white-50 mb-4 text-center">
              Discover the real hauntings that inspired Dark Northwest
            </p>

            {/* Keyboard Navigation Control Bar */}
            <div
              ref={navControlRef}
              className="pnw-map-nav"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              role="application"
              aria-label="Map location navigator. Use left and right arrow keys to navigate between locations."
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "rgba(30, 30, 30, 0.95)",
                padding: "12px 16px",
                borderRadius: "8px 8px 0 0",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "none",
              }}
            >
              <button
                onClick={handlePrevious}
                disabled={!isMapReady}
                aria-label="Previous location"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: isMapReady ? "pointer" : "not-allowed",
                  opacity: isMapReady ? 1 : 0.5,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) =>
                  isMapReady &&
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                <span className="d-none d-sm-inline">Prev</span>
              </button>

              <div
                style={{
                  textAlign: "center",
                  flex: 1,
                  padding: "0 16px",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "1rem",
                    marginBottom: "2px",
                  }}
                  aria-live="polite"
                >
                  {currentLocation
                    ? currentLocation.title
                    : "Select a location"}
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.75rem",
                  }}
                >
                  {currentIndex >= 0
                    ? `${currentIndex + 1} of ${mapLocations.length}`
                    : "Use ← → arrows or click to navigate"}
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!isMapReady}
                aria-label="Next location"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: isMapReady ? "pointer" : "not-allowed",
                  opacity: isMapReady ? 1 : 0.5,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) =>
                  isMapReady &&
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <span className="d-none d-sm-inline">Next</span>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>

            <div
              ref={mapRef}
              id="pnw-map"
              style={{
                height: "450px",
                width: "100%",
                borderRadius: "0 0 8px 8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            ></div>

            {/* Keyboard hint */}
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "0.8rem",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              <i className="fa-solid fa-keyboard" style={{ marginRight: "6px" }}></i>
              Tip: Click the navigation bar and use arrow keys to navigate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PNWMap;
