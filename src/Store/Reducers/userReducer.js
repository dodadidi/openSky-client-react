const initialState = {
    loggedInUser: null
}
export function userReducer(state = initialState, action) {
    switch (action.type) {
     
      case 'SET_USER':
      console.log(action.loggedInUser)  
      return { ...state, loggedInUser: action.loggedInUser }
        
      default:
        return state
    }
  }
  