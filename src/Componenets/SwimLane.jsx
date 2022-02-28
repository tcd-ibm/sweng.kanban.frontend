import React from 'react';
import { Box, Typography } from '@material-ui/core';

const SwimLane = ({}) => {
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
        <Typography>Hello World</Typography>
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
        > 

        <Typography>Hello World</Typography>
        </Box>
        </Box>
    )
}
export default SwimLane;