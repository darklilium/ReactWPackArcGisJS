import React from 'react';
import Map from "esri/map";

class LoginApp extends React.Component {
  constructor(){
    super();

  }

  componentDidMount(){
    var map = new Map("map_content", {basemap: "streets"});
  }

  render(){
    return (
        <div className="login_wrapper_content">
        <h1>aa</h1>
          <div id="map_content"></div>
        </div>
    );
  }
}

export default LoginApp;
