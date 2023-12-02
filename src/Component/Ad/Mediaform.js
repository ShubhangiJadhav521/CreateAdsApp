import React, { useState } from 'react';
import { Grid, Paper, Box, TextField, Typography, Button } from '@mui/material';
import "./ads.css";
import { useNavigate } from 'react-router-dom';
import Submitmodel from './Submitmodel';

const Mediaform = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/create-ad')
    }
    const handleSubmit = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            navigate('/create-ad')
        }, 600);
    }
    return (
        <div className={isSubmitted ? 'blur' : ''}>
            <Paper elevation={1} sx={{ padding: '10px', margin: '30px' }}>
                <Typography variant='h6' sx={{ padding: '5px 10px' }}>Create Text & Media</Typography>

                <Grid container spacing={4} sx={{ padding: '0 20px' }}>
                    <Grid item xs={12} lg={6}>
                        <Box>
                            <label htmlFor="head01"> Heading 01</label>
                            <input type='text' id='head01' placeholder='Add a heading that would make users interested' required />
                        </Box>
                        <Box sx={{ marginTop: '10px' }}>
                            <label htmlFor="head02"> Heading 02</label>
                            <input type='text' id='head02' placeholder='Add a heading that would make users interested' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <label htmlFor='des01'>Description 01</label>
                        <textarea rows={6} type='text' id='des01' placeholder='Add primary text to help users understand more about your products, services or offers' />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label htmlFor="landscapeImage">Landscape Marketing Image(1.9.1) </label>
                        <input type='text' id='landscapeImage' placeholder='Add the URL of the Image you want to use for the ad' />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label htmlFor="portraitImage">Portrait Marketing Image(4.5)</label>
                        <input type='text' id='portraitImage' placeholder='Add the URL of the Image you want to use for the ad' />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label htmlFor="squareImage">Square Marketing Image(1.1)</label>
                        <input type='text' id='squareImage' placeholder='Add the URL of the Image you want to use for the ad' />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="videoURL">Video URL</label>
                        <input type='text' id='videoURL' placeholder='Add the URL of the video you want to use for the ad' />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <label htmlFor="businessName">Business Name</label>
                        <input type='text' id='businessName' placeholder='Add your business name' required />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <label htmlFor="websiteURL">Website URL</label>
                        <input type='text' id='websiteURL' placeholder='Add the URL of the landing page you want to redirect users to' />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ float: 'right', margin: '10px' }}>
                            <Button variant='outlined' sx={{ padding: '5px 30px' }} onClick={() => handleBack()} >Back</Button>
                            <Button variant="contained" sx={{ padding: '5px 30px', marginLeft: '20px' }} type='submit' onClick={() => handleSubmit()} >Submit</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Submitmodel open={isSubmitted} />
            </Paper>
        </div>
    );
};

export default Mediaform;
