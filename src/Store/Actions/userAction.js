export function saveUser(user) {
    console.log(user)
    return dispatch => {
        const loggedInUser = setUser(user);
        console.log("vnvnnvnv", loggedInUser);
        dispatch({ type: 'SET_USER', loggedInUser })
    }
}

function setUser(user) {
    const objUser = {
        googleId: user.googleId,
        admin: user.admin,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        picture: user.picture,
        like_flights: []
    }    
    return objUser;
}
