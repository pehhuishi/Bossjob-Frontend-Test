export const fetchJobs = (job,pay) => {
  return(
    type: 'FETCH_JOB',
    payload: {
      job
    }
  )
}