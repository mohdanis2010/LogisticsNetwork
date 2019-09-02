import React from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
const GoogleMap = ({ defaultCenter }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec",
        }}
        defaultCenter={defaultCenter}
        defaultZoom={18}></GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  // PropTypes.string,
};

export default GoogleMap;
