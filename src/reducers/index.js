const initialState = {
  allJobs : 0,
  jobs : [],
  allPages: 0,
  searchJob: ""
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_JOB' : {
      return { ...state, searchJob: action.payload }
    }
    case 'FETCH_JOB' : {
      return { ...state, jobs: action.payload }
    }
    case 'FETCH_ALL_JOBS' : {
      return { ...state, allJobs: action.payload }
    }
    default: return state
  }
}

export default reducer;