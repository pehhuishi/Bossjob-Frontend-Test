import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header'
import Search from './shared/components/Search/Search'
import Job from './shared/components/Job/Job'
import Pagination from './shared/components/Pagination/Pagination'

import { connect } from "react-redux";
import { fetchJobs,fetchAllJobs } from "./actions"

class App extends Component {

  componentDidMount = async () => {
    const { fetchJobs, fetchAllJobs } = this.props;
    fetchJobs();
    fetchAllJobs();
  }
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <Search />
          <Job />
          <Pagination />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    allJobs: state.allJobs
  }
};

export default connect(
  mapStateToProps,
  { fetchJobs, fetchAllJobs}
)(App);
