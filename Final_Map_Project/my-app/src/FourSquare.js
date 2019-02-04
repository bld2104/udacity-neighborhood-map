import React, {Component} from 'react'
import {PropTypes} from 'prop-types'


// This replaces the original two div's and <ol></ol>
// It dynamically adds the title of the bookshelf 
// Then lists out the books currently on that shelf using the Book.js component.
class MapThing extends Component {


  static propTypes = {
    locations: PropTypes.array.isRequired,
  }

 state = { 
    arrayListFinal: [        ]

   }


  componentDidMount() {
var arrayList = [];
this.props.locations.forEach((location, i) => {
fetch('https://api.foursquare.com/v2/venues/search' +
          '?client_id=AN1EQZ2DUPRF3Y5VIR5NBO20OSXVJ4R3DIX3YD2R0LJHSPIT' +
          '&client_secret=YXBZRDLZ2ZE5FGZXNI2TWJ5VAH4IITYJDVLK3LMCJ50FJINW' +
          '&v=20181201&ll='+location.ll.lat+','+location.ll.lng+'&limit=5').then(res => res.json()).then((data) => {
            arrayList.push(data.response.venues[i].location.formattedAddress)
this.setState({arrayListFinal: arrayList})
  });
});
}


      // This function populates the infowindow when the marker is clicked. We'll only allow
      // one infowindow which will open at the marker that is clicked, and populate based
      // on that markers position.
     /* populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div><div>' + marker.description + '</div><div>'+books.venueName+'</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        }
      }*/







render() {


    return (
       <div>
{this.state.arrayListFinal}
       </div>

      )

  }

}

export default MapThing;