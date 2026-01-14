import React, { useEffect, useRef } from "react";
import mapLocations from "../data/mapLocations.json";

function PNWMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const isInitializedRef = useRef(false);

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
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ba2201" width="32" height="32">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      mapLocations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng], {
          icon: darkIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div class="pnw-popup">
            <h4 class="pnw-popup-title">${location.title}</h4>
            <p class="pnw-popup-subtitle">${location.subtitle}</p>
          </div>
        `);
      });

      mapInstanceRef.current = map;
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
            <div
              ref={mapRef}
              id="pnw-map"
              style={{
                height: "500px",
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PNWMap;
