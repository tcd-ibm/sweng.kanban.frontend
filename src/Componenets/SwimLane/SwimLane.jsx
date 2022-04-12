import React, { useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import KBCard from '../Card/Card';
import AddIcon from '@mui/icons-material/Add';
import SwimlaneDialog from '../SwimlaneDialog/SwimlaneDialog';

const SwimLane = ({ swimLaneData, swimLane, kanbanData, kanbanId }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClose = () => setDialogOpen(false);
  const handleOpen = () => setDialogOpen(true);
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      bgcolor: '#9bbedb',
      p: 1,
      m: 2,
      borderRadius: 1
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',

        p: 1,
        borderRadius: 1
      }}>
        <Box sx={{ alignSelf: 'center' }}>
          <Typography variant="h5">{swimLane.swimLaneTitle}</Typography>
        </Box>
        <Box sx={{ alignSelf: 'flex-end' }}>
          <Button onClick={handleOpen}>
            <AddIcon />
          </Button>
          <SwimlaneDialog open={dialogOpen} handleClose={handleClose} kanbanId={kanbanId} />
        </Box>
      </Box>


      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        m: 1,
        borderRadius: 3
      }}
      >
        {swimLaneData?.map((card, index) =>
          <KBCard title={card.taskTitle} desc={card.taskDescription} key={card._id} id={card._id} swimLane={swimLane} swimLaneData={kanbanData} />

        )
        }
      </Box>
    </Box>

  )
}
export default SwimLane;