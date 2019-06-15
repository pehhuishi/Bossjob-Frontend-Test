import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase, faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';

import './Job.css'

class Job extends React.Component{
  
  jobRender = () => {
    const { jobs, searchJob } = this.props;
    console.log(searchJob);
    if (!jobs) return;
    return jobs
      .filter(job => {
        console.log(searchJob);
        return (job.job_title.toLowerCase().indexOf(searchJob) > -1);
      })
      .map(job => {
      return (
        <div className="job" key={job.id}>
          <div className="borderline"></div>

          <div className="company">
            <span className="title">{job.job_title}</span>
            <span className="pay">{job.salary_range_from} - {job.salary_range_to}</span>
          </div>

          <div className="desc">
            <div className="desc1">
              <span><FontAwesomeIcon style={{paddingRight: '10px', color: '#3F92ED'}} icon={faMapMarkerAlt}/> {job.job_location}</span> 
              <span><FontAwesomeIcon style={{paddingRight: '10px', color: '#3F92ED'}} icon={faBriefcase}/> {job.xp_lvl}</span>
            </div>
            <div className="desc2">
              <span><FontAwesomeIcon style={{paddingRight: '10px', color: '#3F92ED'}} icon={faGraduationCap}/> {job.degree}</span>
              <span><FontAwesomeIcon style={{paddingRight: '10px', color: '#3F92ED'}} icon={faClock}/> {job.job_type}</span>
            </div>
          </div>

          <div className="agent">
            <span className="logo">{job.company_name}</span>
            <span className="time">3 hours ago</span>
          </div>

        </div>
      )
    })
  }

  render(){

    return(
      <div className="jobContainer">
        <span className="numOfJob">{this.props.allJobs} jobs found</span>

        {this.jobRender()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { 
    jobs : state.jobs, 
    allJobs : state.allJobs, 
    searchJob : state.searchJob }
}

export default connect(mapStateToProps)(Job);