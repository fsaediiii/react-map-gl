import * as React from "react";
import ReactMapGL, { setRTLTextPlugin, Marker } from "react-map-gl";
import neighborhoods from "./Tehran_neighborhoods.json";
import Pin from "../Pin/Pin";

setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);
const {
  REACT_APP_MAPBOX_TOKEN: token,
  REACT_APP_MAPBOX_STYLE: mapStyle,
} = process.env;

const Map = () => {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vl",
    latitude: 35.6892,
    longitude: 51.389,
    zoom: 12,
  });

  const markers = () =>
    neighborhoods.data.map((item) => (
      <Marker
        key={item.id}
        latitude={item.geometry.cordinates[0]}
        longitude={item.geometry.cordinates[1]}
      >
        <Pin size={40} clicked={() => clickHandler(item)} />
      </Marker>
    ));

  const clickHandler = (location) => {
    console.log("location", location);
  };

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken={token}
      mapStyle={mapStyle}
    >
      {markers()}
    </ReactMapGL>
  );
};
export default Map;
