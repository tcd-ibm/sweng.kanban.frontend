import React from 'react';
import { Box, Typography } from '@material-ui/core';
import KBCard from '../Card/Card';

const SwimLane = ({swimLaneData, swimLaneTitle, isLoading}) => {

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
        alignSelf: 'center',
        p: 1,
        borderRadius: 1}}>
        <Typography variant="h5">{swimLaneTitle}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
          borderRadius: 3
        }}
      >
        {swimLaneData?.map(card =>
          <KBCard title={card.taskTitle} desc={card.taskDescription} key={card._id} swimLaneTitle={swimLaneTitle}/>
          )
        }
      </Box>
    </Box>

  )
}
export default SwimLane;