import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    CssBaseline,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { MenuAdmin, MenuStudent, MenuTeacher, SignOut } from './MenuItems'
import './SideMenu.styles.scss'


const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const SideMenu = ({ previleges }) => {
    const classes = useStyles();
    const [activeMenu, setActiveMenu] = useState([...MenuAdmin ]);
    

    return(
        <div className={classes.root}>
            <CssBaseline />
            <Drawer className={classes.drawer} variant='permanent' classes={{paper: classes.drawerPaper}} anchor='left'>
                <div className={classes.toolbar} />
                <List>
                    {activeMenu.map((item, idx) => (
                        <Link key={idx} to={item.path} className='nav-items'>
                            <ListItem button>
                                <ListItemIcon>{ item.icon }</ListItemIcon>
                                <ListItemText button primary={item.title} />
                            </ListItem>
                        </Link>
                    ))}
                    <Divider />
                    <Link to={SignOut.path} className='nav-items btn-logout' >
                        <ListItem button>
                            <ListItemIcon>{ SignOut.icon }</ListItemIcon>
                            <ListItemText primary={SignOut.title} />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    )
}

export default SideMenu;