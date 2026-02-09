import React, { useEffect, useRef, useState, useCallback } from "react";
import mapLocations from "../data/mapLocations.json";

function PNWMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const clusterGroupRef = useRef(null);
  const isInitializedRef = useRef(false);
  const navControlRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isMapReady, setIsMapReady] = useState(false);

  const navigateToLocation = useCallback((index) => {
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
  }, []);

  const handlePrevious = useCallback(() => {
    const newIndex =
      currentIndex <= 0 ? mapLocations.length - 1 : currentIndex - 1;
    navigateToLocation(newIndex);
  }, [currentIndex, navigateToLocation]);

  const handleNext = useCallback(() => {
    const newIndex =
      currentIndex >= mapLocations.length - 1 ? 0 : currentIndex + 1;
    navigateToLocation(newIndex);
  }, [currentIndex, navigateToLocation]);

  const handleReset = useCallback(() => {
    if (!mapInstanceRef.current) return;

    const pnwCenter = [49.276926732674355, -122.8490206310808];
    mapInstanceRef.current.setView(pnwCenter, 5, {
      animate: true,
      duration: 0.5,
    });

    markersRef.current.forEach((m) => m.closePopup());
    setCurrentIndex(-1);
  }, []);

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
      if (!L || !L.markerClusterGroup) return;

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

      const clusterGroup = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
          const count = cluster.getChildCount();
          return L.divIcon({
            html: `<div class="pnw-cluster-bubble">
              <span class="pnw-cluster-count">${count}</span>
            </div>`,
            className: "pnw-cluster-icon",
            iconSize: [45, 45],
            iconAnchor: [22, 22],
          });
        },
        showCoverageOnHover: false,
        spiderfyOnMaxZoom: true,
        zoomToBoundsOnClick: true,
        maxClusterRadius: 20,
      });

      const markers = [];
      mapLocations.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng], {
          icon: darkIcon,
        });

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
        clusterGroup.addLayer(marker);
      });

      map.addLayer(clusterGroup);
      clusterGroupRef.current = clusterGroup;
      markersRef.current = markers;
      mapInstanceRef.current = map;
      setIsMapReady(true);
    };

    const loadLeaflet = () => {
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        linkEl.integrity =
          "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        linkEl.crossOrigin = "";
        document.head.appendChild(linkEl);
      }

      if (!document.querySelector('link[href*="MarkerCluster"]')) {
        const clusterCss = document.createElement("link");
        clusterCss.rel = "stylesheet";
        clusterCss.href =
          "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css";
        document.head.appendChild(clusterCss);

        const clusterDefaultCss = document.createElement("link");
        clusterDefaultCss.rel = "stylesheet";
        clusterDefaultCss.href =
          "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css";
        document.head.appendChild(clusterDefaultCss);
      }

      const loadScript = (src, integrity, callback) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          callback && callback();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        if (integrity) {
          script.integrity = integrity;
          script.crossOrigin = "";
        }
        script.onload = callback;
        document.body.appendChild(script);
      };

      const loadMarkerCluster = () => {
        if (window.L && window.L.markerClusterGroup) {
          initMap();
          return;
        }
        loadScript(
          "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js",
          null,
          initMap
        );
      };

      if (window.L) {
        loadMarkerCluster();
        return;
      }

      loadScript(
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
        "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=",
        loadMarkerCluster
      );
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
            >
              <button
                onClick={handlePrevious}
                disabled={!isMapReady}
                aria-label="Previous location"
                className="pnw-map-nav-btn"
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                <span className="d-none d-sm-inline">Prev</span>
              </button>

              <div className="pnw-map-nav-center">
                <div className="pnw-map-nav-title" aria-live="polite">
                  {currentLocation ? currentLocation.title : "Select a location"}
                </div>
                <div
                  className={`pnw-map-nav-subtitle${currentIndex >= 0 ? " has-reset" : ""}`}
                >
                  {currentIndex >= 0
                    ? `${currentIndex + 1} of ${mapLocations.length}`
                    : "Use ← → arrows or click to navigate"}
                </div>
                {currentIndex >= 0 && (
                  <button
                    onClick={handleReset}
                    aria-label="Reset map to overview"
                    className="pnw-map-reset-btn"
                  >
                    <i
                      className="fa-solid fa-rotate-left"
                      aria-hidden="true"
                    ></i>
                    Reset
                  </button>
                )}
              </div>

              <button
                onClick={handleNext}
                disabled={!isMapReady}
                aria-label="Next location"
                className="pnw-map-nav-btn"
              >
                <span className="d-none d-sm-inline">Next</span>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>

            <div ref={mapRef} id="pnw-map"></div>

            {/* Keyboard hint */}
            <p className="pnw-map-hint">
              <i className="fa-solid fa-keyboard"></i>
              Tip: Click the navigation bar and use arrow keys to navigate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PNWMap;
