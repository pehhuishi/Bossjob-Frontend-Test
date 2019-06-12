import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import Header from './shared/components/Header'
import Search from './shared/components/Search/Search'
import Job from './shared/components/Job/Job'

class App extends Component {
  state = {
    data: null
  }

  componentDidMount = async () => {
    const response = await axios.get('https://search.bossjob.com/api/v1/search/job_filter?size=12&query=system')

    console.log(JSON.stringify(response))
    // .then(response => response.json())
    // .then(data => this.setState({ data }))
  }
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <Search />
          <Job />
        </div>
      </div>
    );
  }
}

export default App;
