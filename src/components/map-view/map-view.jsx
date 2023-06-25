import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./map-view.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFlZGF3bmxhdyIsImEiOiJjbGozMnRlMmoxaWdwM2V1dTI1OXE3djN3In0.Yv7jHogURr0wDVNobpeRiw";

export const MapView = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.4194); // SF longitude
  const [lat, setLat] = useState(37.7749); // SF latitude
  const [zoom, setZoom] = useState(12); // Zoom for SF
  const [marker, setMarker] = useState(null); // New state for the user-added marker

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/raedawnlaw/clj7q5u3m00a001nw8arocm3y",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
      new mapboxgl.Marker({ color: "red" })
        .setLngLat([lng, lat])
        .addTo(map.current);

      map.current.on("click", (event) => {
        console.log(event);
        console.log(event.lngLat);

        setMarker(
          new mapboxgl.Marker({ color: "red" })
            .setLngLat(event.lngLat)
            .addTo(map.current)
        );
      });

      map.current.on("move", () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
