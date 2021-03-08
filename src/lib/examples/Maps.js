import React, { Component } from "react";
import MapboxControl from "../map/MapboxControl";

import readCSV from "../map/mapbox/sources/readCSV";
import Marker from "../map/mapbox/markers/Marker";
import GeoCoderControl from "../map/mapbox/GeoCoderControl";

const GREEN_PIN = 'data:image/png;base64,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'
const RED_PIN = 'data:image/png;base64,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';

class Maps extends Component {
  constructor({  }) {
    super({ });
  }

  render() {
    return <>
      <h2>Maps/GIS</h2>

      <h3>Geocoding Search</h3>
      <GeoCoderControl />

      <h3>Maps</h3>
      <MapboxControl ref={el => {this.__mapboxControl = el;}}
                     style={{ height: "50vh" }} />
    </>;
  }

  componentDidMount() {

  }
}

export default Maps;
