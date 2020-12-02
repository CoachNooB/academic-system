import React from 'react';
import {
    Container,
    CssBaseline,
    Grid,
} from '@material-ui/core';

//components
import SideMenu from '../components/Navigations/SideMenu.component';

const Dashboard = () => {
    return (
        <Container>
            <CssBaseline />
            <Grid>
                <SideMenu />
            </Grid>
        </Container>
    )
}

export default Dashboard
