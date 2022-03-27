import React from 'react';
import { Box, Typography } from '@material-ui/core';
import KBCard from './Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SwimLane = ({swimLaneData, swimLaneTitle}) => {
  return (
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        bgcolor: '#9bbedb',
        p: 1,
        m: 1,
        borderRadius: 1
      }}
      >
        <Typography>{swimLaneTitle}</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#f5a7bb',
          p: 1,
          m: 1,
          borderRadius: 3
        }}
        >
          {swimLaneData?.map(card => <KBCard title={card.title} desc={card.desc} />
          )}
        </Box>
      </Box>
  )
}
export default SwimLane;