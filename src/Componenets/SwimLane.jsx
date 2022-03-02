import React from 'react';
import { Box, Typography } from '@material-ui/core';
import KBCard from './Card';

const SwimLane = ({swimLaneData, swimLaneTitle}) => {
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
}
export default SwimLane;