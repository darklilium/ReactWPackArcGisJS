import React from 'react';
import Map from "esri/map";
import Search from 'esri/dijit/Search';
import BasemapToggle from "esri/dijit/BasemapToggle";
import utils from 'esri/arcgis/utils';

class LoginApp extends React.Component {
  constructor(){
    super();

  }

  componentDidMount(){
    var map = new Map("map_content", { basemap: "topo",
          center: [-122.45, 37.75],
          zoom: 13});

    var search = new Search({
        map: map
     }, "search");
    search.startup();

    var toggle = new BasemapToggle({
       map: map,
       basemap: "satellite"
     }, "BasemapToggle");
     toggle.startup();
  }

  render(){
    var divStyle1 = {
      position: 'absolute',
      right:'20px',
      top:'10px',
      'zIndex':'999'
    }
    var divStyle2 = {
      width:'380px',
      height:'280px',
      overflow:'auto'
    }

    var divStyle3 = {
      padding:'0'
    }

    return (
        <div className="login_wrapper_content">
        <h1>My map</h1>
          <div id="search"></div>

          <div id="map_content">
            <div id="BasemapToggle"></div>
          </div>
        </div>
    );
  }
}

export default LoginApp;
