import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase, faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons'

import './Job.css'

class Job extends React.Component{
  render(){
    return(
      <div className="job">
        <div className="borderline"></div>

        <div className="company">
          <span className="title">Customer Service</span>
          <span className="pay">P30k - P35k</span>
        </div>

        <div className="desc">
          <div className="desc1">
            <span><FontAwesomeIcon icon={faMapMarkerAlt}/> cebu city</span> 
            <span><FontAwesomeIcon icon={faBriefcase}/> 1 -3 years</span>
          </div>
          <div className="desc2">
            <span><FontAwesomeIcon icon={faGraduationCap}/> Diploma</span>
            <span><FontAwesomeIcon icon={faClock}/> Full-time</span>
          </div>
        </div>

        <div className="agent">
          <span className="logo"><img src="" alt=""/>company name</span>
          <span className="time">3 hours ago</span>
        </div>

        <div className="borderline"></div>
      </div>
    )
  }
}

export default Job;