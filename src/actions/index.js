// async action creator return a function instead
// dispatch action when response is ready
import axios from 'axios';

export const fetchJobs = () => async dispatch => {
  try {
    const response = await axios.get('https://search.bossjob.com/api/v1/search/job_filter?size=12&query=system');
    const jobs = response.data.data.jobs;
    dispatch(
      {
        type: 'FETCH_JOB',
        payload: jobs
      }
    )
  } catch(error) {
    console.log(error);
  }
}

export const fetchAllJobs = () => async dispatch => {
  try{
    const response = await axios.get('https://search.bossjob.com/api/v1/search/job_filter');
    const allJobs = response.data.data.total_num;
    // console.log(allJobs);
    dispatch(
      {
        type: 'FETCH_ALL_JOBS',
        payload: allJobs
      }
    )
  }
  catch(error){
    console.log(error);
  }
}

export const fetchAllPages = () => async dispatch => {
  try{
    const response = await axios.get('https://search.bossjob.com/api/v1/search/job_filter');
    const allPages = response.data.data.total_pages;
    dispatch(
      {
        type: 'FETCH_ALL_PAGES',
        payload: allPages
      }
    )
  }
  catch(error){
    console.log(error);
  }
}

export const searchJob = (searchJob) => {
  console.log(searchJob);
  return{
    type: 'SEARCH_JOB',
    payload: searchJob 
  }
}
