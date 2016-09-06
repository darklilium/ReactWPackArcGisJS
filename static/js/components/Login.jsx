import React from 'react';
import Map from "esri/map";

class LoginApp extends React.Component {
  constructor(){
    super();

  }

  componentDidMount(){
    var map = new Map("map_content", { basemap: "topo",
          center: [-122.45, 37.75],
          zoom: 13});
  }

  render(){
    return (
        <div className="login_wrapper_content">
        <h1>My map</h1>
          <div id="map_content"></div>
        </div>
    );
  }
}

export default LoginApp;
