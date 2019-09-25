import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
  componentDidMount() {
    console.log('<>')
    axios.get('/api/book')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  render() {
    return (
      <div>
        next
      </div>
    )
  }
}
