import { 
 GET_LOGS,
 ADD_LOG,
 DELETE_LOG,
 UPDATE_LOG,
 SEARCH_LOGS,
 SET_CURRENT,
 CLEAR_CURRENT,
 SET_LOADING,
 LOGS_ERROR
} from './types';

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
    
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }

}

// Add new log from server
export const addLog = (log) => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
    
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }

}

// Delete log from server
export const deleteLog = (id) => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
    
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }

}

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
}

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
}

// Update log from server
export const updateLog = (log) => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({
      type: UPDATE_LOG,
      payload: log
    });
    
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }

}

// Search logs from server
export const searchLogs = (text) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
    
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }

}


// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();
//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   }
// }

