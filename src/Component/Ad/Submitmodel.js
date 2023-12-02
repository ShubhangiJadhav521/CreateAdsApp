import React from 'react';
import { Dialog, DialogContent, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SubmitModel = ({ open }) => {
    return (
        <Dialog open={open}  maxWidth='xs' fullWidth>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', flexDirection: 'column' }}>
                    <CheckCircleIcon fontSize="large" sx={{ color: '#0894f3' }} />
                    <Typography variant="h6" sx={{ marginLeft: '10px' }}>Submitted</Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default SubmitModel;
