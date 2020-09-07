import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { useState, useEffect } from "react";

const Map = withScriptjs(
  withGoogleMap(props => {
    const [selectedCenter, setSelectedCenter] = useState(null);

    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedCenter(null);
        }
      };
      window.addEventListener("keydown", listener);

      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);

    const recycleCenters = props.recycleCenters;

    if (recycleCenters.length > 0) {
      return (
        <GoogleMap
          zoom={10}
          center={{
            lat: recycleCenters[0].latitude,
            lng: recycleCenters[0].longitude
          }}
        >
          {recycleCenters.map(center => (
            <Marker
              key={center.id}
              position={{
                lat: center.latitude,
                lng: center.longitude
              }}
              onClick={() => {
                setSelectedCenter(center);
              }}
            />
          ))}

          {selectedCenter && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedCenter(null);
              }}
              position={{
                lat: selectedCenter.latitude,
                lng: selectedCenter.longitude
              }}
            >
              <div>
                <h3>{selectedCenter.name}</h3>
                <h5>
                  {selectedCenter.address}, {selectedCenter.city},{" "}
                  {selectedCenter.state} {selectedCenter.zip_code}
                </h5>
                <h5>{selectedCenter.phone_number}</h5>
                <p>Hours of operation: {selectedCenter.hours}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      );
    } else {
      return <GoogleMap zoom={4.5} center={{ lat: 39.6693, lng: -98.3476 }} />;
    }
  })
);

export default Map;
