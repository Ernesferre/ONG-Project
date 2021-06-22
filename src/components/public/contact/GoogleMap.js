import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const key = "AIzaSyAbtLpuihssQ11VNOGGul4bzO6j8tMx2hE",
    mapId = "b23b721c336d70e0";

  return (
    <div>
      <LoadScript
        googleMapsApiKey={key}
        libraries={["places"]}
        mapIds={[mapId]}
      >
        <GoogleMap
          center={{ lat: 40.756795, lng: -73.954298 }}
          zoom={15}
          options={{ mapId: mapId }}
          mapContainerStyle={{ height: "400px", width: "100vw" }}
        />
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
