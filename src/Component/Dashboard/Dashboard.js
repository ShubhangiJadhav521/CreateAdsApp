import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Table from './Table';
import DoughnutChart from './Doughnut';
import "./dashboard.css";

function Dashboard() {
    return (
        <Box sx={{ padding: '20px', }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={1} >
                        <Table />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={1}>
                        <DoughnutChart />
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    )
}
export default Dashboard