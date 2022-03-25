import React from 'react';
import { Box, Typography } from '@material-ui/core';
import KBCard from './Card';

const SwimLane = ({swimLaneData, swimLaneTitle}) => {
<<<<<<< HEAD
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
        {swimLaneData?.map(card =>
          <KBCard title={card.title} desc={card.desc}/>
          )
        }
      </Box>
    </Box>
  )
=======
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
        >
        <Typography>{swimLaneTitle}</Typography>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
        > 
        {swimLaneData?.map(card =>
            <KBCard title={card.title} desc={card.desc} />
            )}
        </Box>
        </Box>
    )
>>>>>>> origin/development
}
export default SwimLane;