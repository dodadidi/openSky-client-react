import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core"
import { HomePage } from "../Components/HomePage"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    MuiAppBarColorPrimary: {
        backgroundColor: `silver`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
        fontFamily:`cursive`
    }
});

const navLinks = [
    { title: `Flights`, path: `/flightsBoard` },
    { title: `Feedbacks`, path: `/feedbacksBoard` },
    { title: `Last Minute`, path: `/lastMinute` },
]

const NavBar = () => {
    const classes = useStyles(); // Add this
    const user = useSelector(state => state.userReducer.user)// from redux
    return (
        <AppBar position="static" style={{ backgroundColor: `#373a40`}}>
            <Toolbar>
              <Link to="/">  <IconButton className="linkHomePage" edge="start" color="inherit" aria-label="home">
                    <Home className="linkHomePage" fontSize="large" />
                </IconButton></Link>
                {/* Add code */}
                <List component="nav" aria-labelledby="main navigation">
                
                   {user&&<List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex} // this
                    >
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />

                                </ListItem>
                            </a>
                        ))}
                        
                    </List>}
                    <HomePage className="homePage"/>
                </List>
                {/* Add code end */}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar