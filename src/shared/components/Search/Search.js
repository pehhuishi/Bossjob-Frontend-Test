import React from 'react';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'
import { searchJob } from '../../../actions';

const Search = () => {

  const handleChange = event => {
    const searchText = event.target.value;
    // console.log(searchText);
    searchJob(searchText.toLowerCase());
  }

  return(
    <div className="search">
      <FontAwesomeIcon style={{ position: 'absolute', color: '#3F92ED'}} icon={faSearch} />
      <input type="text" placeholder="Search for job title or company name" onChange={handleChange}/><br/>
      <button>Filter results</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { 
    searchJob : state.searchJob }
}

export default connect(mapStateToProps, { searchJob })(Search);