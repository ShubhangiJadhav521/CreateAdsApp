import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, Button } from '@mui/material';
import "./ads.css";
import { useNavigate } from 'react-router-dom';
import Submitmodel from './Submitmodel';

const Textform = () => {
  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleBack = () => {
    navigate('/create-ad')
  }
  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      navigate('/create-ad');
    }, 600);
  };


  return (
    <div className={isSubmitted ? 'blur' : ''}>
      <Paper elevation={3} sx={{ padding: '10px', margin: '20px' }}>
        <Box >
          <Typography variant='h6' sx={{ padding: '10px', float: 'left' }}>Create Text & Media</Typography>

          <Grid container spacing={4} sx={{ padding: '0 20px' }}>
            <Grid item xs={12} lg={6}>
              <Box >
                <label htmlFor="heading1">Heading 01</label>
                <input type='text' id='heading1' placeholder='Add a heading that would make users interested' className="text-input" />
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <label htmlFor="heading2">Heading 02</label>
                <input type='text' id='heading2' placeholder='Add a heading that would make users interested' className="text-input" />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box >
                <label htmlFor="description">Description 01</label>
                <textarea rows={6} type='text' id='description' placeholder='Add primary text to help users understand more about your products, services or offers' className="text-area" />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box >
                <label htmlFor="businessName">Business Name</label>
                <input type='text' id='businessName' placeholder='Add your business name' className="text-input" />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box >
                <label htmlFor="buttonLabel">Button Label</label>
                <input type='text' id='buttonLabel' placeholder='Select a label that best suits your ad' className="text-input" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box >
                <label htmlFor="websiteURL">Website URL</label>
                <input type='text' id='websiteURL' placeholder='Add the URL of the landing page you want to redirect users to' className="text-input" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ float: 'right', margin: '10px', }}>
                <Button variant='outlined' sx={{ padding: '5px 30px' }} onClick={() => handleBack()}>Back</Button>
                <Button type='submit' variant="contained" sx={{ padding: '5px 30px', marginLeft: '20px' }} onClick={() => handleSubmit()}>Submit</Button>
              </Box>
            </Grid>
          </Grid>

        </Box>
        <Submitmodel open={isSubmitted} />
      </Paper>
    </div>
  );
};

export default Textform;
