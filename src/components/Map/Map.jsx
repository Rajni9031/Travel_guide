import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import { ImportantDevices } from "@material-ui/icons";
import Rating from "@material-ui/lab";

import useStyles from "./style.js";

const Map = ({setCoordinates,setBounds,coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    // const coordinates = { lat: 0, lng: 0 }; // default coordinates

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{apiKey: 'AIzaSyA2oSkX0c-1EFQ47_Xa5PlOvHxy7PXsTA4' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    );
};
    
export default Map;