import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MapThing from './FourSquare.js';
import './style.css'



class FourSquare extends React.Component {
  state = { 
    locations: [
        {id: 0, top: false, description: 'A coeducational Roman Catholic college in the Chestnut Hill section of Philadelphia, Pennsylvania within the Archdiocese of Philadelphia.', title: 'Chestnut Hill College', ll: {lat:40.084420 , lng:-75.227920 }},
        {id: 1, top: true, description: "This is Barb's second home. A newer Whole Foods in the Plymouth Meeting Mall complex.", title: "Whole Foods Plymouth Meeting", ll: {lat:40.113899 , lng:-75.285309 }},
        {id: 2, top: true, description: "Environmental education and conservation of largest privately-owned tract of land in Philadelphia.", title: 'The Schuylkill Center', ll: {lat:40.058860 , lng:-75.244020 }},
        {id: 3, top: true, description: "Also known as the tree house, the Wissahickon Environmental Center provides environmental education to adults, children, and families, throughout Philadelphia and vicinity, through public and school and group programming.", title: 'Wissahickon Environmental Center', ll: {lat:40.085860 , lng:-75.230700 }},
        {id: 4, top: false, description: "The Morris Arboretum of the University of Pennsylvania is the official arboretum of the Commonwealth of Pennsylvania.", title: 'The Morris Arboretum', ll: {lat:40.090330 , lng:-75.226390 }}
        ]

   }


//location: {lat:40.084420 , lng:-75.227920 }
  componentDidMount() {


    //fetch(api).then(response => this.setState({ data: response.data)).catch()
 }


 

render() {
    return (
    <div>
      <div className="options-box">
        <h1>Barb's Favorite Places</h1>
        <div>
                <div className="filter-options" tabindex="0" aria-label="Filter Results">
        <h2>Filter Results</h2>
        <select id="locations-select" name="locations" onchange="updateLocations()" aria-label="Select Location">
          <option value="all">All Locations</option>
          <option value="top">Top 3 Locations</option>
          <option value="bottom">Bottom 2 Locations</option>
        </select>
      </div>
 <ul id="locations-list" tabindex="0" aria-label="Locations List"></ul>
        </div>
      </div>
      <div id="map"></div>
    

    


<script src="main.js" ></script>
<script src="foursquare.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDktdBRgynxsyoSnHm9onezl_C2bZfch6c&v=3&callback=initMap">
    </script>

      <div>
        <MapThing locations={this.state.locations} />
      </div>
      </div>
    )
  }
}


export default FourSquare