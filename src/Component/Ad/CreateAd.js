import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, Button } from '@mui/material';
import Mobile1 from "../image/mobile1.jpg";
import Mobile2 from "../image/mobile2.jpg";
import { useNavigate } from 'react-router-dom';

function CreateAd() {
    const navigate = useNavigate()
    const [selectedAds, setSelectedAds] = useState([]);

    const handleInput = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setSelectedAds([...selectedAds, name]);
        } else {
            const filteredAds = selectedAds.filter(ad => ad !== name);
            setSelectedAds(filteredAds);
        }
    };

    const handleForm = () => {
        if (selectedAds.length === 0) {
            window.alert("Please select at least one ad type.");
        } else if (selectedAds.includes("text")) {
            navigate('/Textform');
        } else {
            navigate('/Mediaform');
        }
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Paper elevation={1} >
                <Box sx={{ height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant='h6' sx={{ position: 'absolute', top: '10px', left: '20px' }}>Create Ads</Typography>
                    <Grid container spacing={8} justifyContent="center">
                        <Grid item>
                            <Paper elevation={3} sx={{ height: '27rem', width: '20rem' }}>
                                <Box sx={{ padding: '10px' }}>
                                    <input type="checkbox" name='text' onChange={(e) => handleInput(e)} />
                                </Box>
                                <img src={Mobile1} alt="Mobile 1" />
                                <Typography sx={{ color: '#b6b6b6' }}>
                                    Create
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: '700' }}>Text Ads</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={3} sx={{ height: '27rem', width: '20rem' }}>
                                <Box sx={{ padding: '10px' }}>
                                    <input type="checkbox" name='media' onChange={(e) => handleInput(e)} />
                                </Box>
                                <img src={Mobile2} alt="Mobile 2" />
                                <Typography sx={{ color: '#b6b6b6' }}>
                                    Create
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: '700' }}>Media Ads</Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                </Box>

                <Box sx={{ textAlign: 'right', padding: '10px' }}>
                    <Button variant="contained" color="primary" sx={{ padding: '7px 40px' }} onClick={() => handleForm()}>Next</Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default CreateAd;
