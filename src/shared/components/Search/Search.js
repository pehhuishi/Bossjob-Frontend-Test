import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

const Search = () => {
  return(
    <div className="search">
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="Search for job title or company name"/><br/>
      <button>Filter results</button>
    </div>
  )
}

export default Search;