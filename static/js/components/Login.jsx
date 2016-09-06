import React from 'react';
import Map from "esri/map";

class LoginApp extends React.Component {
  constructor(){
    super();

  }

  componentWillMount(){
    var map = new Map("map_content", {basemap: "streets"});
  }



  render(){
    return (
        <div className="login_wrapper_content">
          <div id="map_content"></div>
        </div>



    );
  }
}

export default LoginApp;
