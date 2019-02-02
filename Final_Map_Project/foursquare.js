import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class A extends React.Component {
  state = { books: [] }


  componentDidMount() {
    // fetch data and update state
        fetch('https://api.foursquare.com/v2/venues/search' +
          '?client_id=AN1EQZ2DUPRF3Y5VIR5NBO20OSXVJ4R3DIX3YD2R0LJHSPIT' +
          '&client_secret=YXBZRDLZ2ZE5FGZXNI2TWJ5VAH4IITYJDVLK3LMCJ50FJINW' +
          '&v=20181201' +
          '&ll=40.084420,-75.227920' +
          '&limit=5').getAll().then((data) => {
      this.setState({books: data})
    })

    //fetch(api).then(response => this.setState({ data: response.data)).catch()
 }

render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<ListBooks books={this.state.books} />)}/>
      </div>
    )
  }
}

/*
fetch('https://api.foursquare.com/v2/venues/search' +
          '?client_id=AN1EQZ2DUPRF3Y5VIR5NBO20OSXVJ4R3DIX3YD2R0LJHSPIT' +
          '&client_secret=YXBZRDLZ2ZE5FGZXNI2TWJ5VAH4IITYJDVLK3LMCJ50FJINW' +
          '&v=20181201' +
          '&ll=40.084420,-75.227920' +
          '&limit=5')
          .then(res => res.json())
          .then(data => {
            let venue = data.response.venues[0],
 			venueAddress = venue.location.formattedAddress.join();
 			return venueAddress;
          });


*/
export default BooksApp