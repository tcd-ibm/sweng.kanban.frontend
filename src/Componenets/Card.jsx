import React from 'react';
import {Typography, CardContent, Card} from '@material-ui/core';
import { Box } from '@mui/system';

const KBCard = ({title, desc }) => {
    return (
<>
    <Card testid="card">
    <Box sx={{ bgcolor: '#FBFFC8', p: 2, display: 'flex' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          style={{
            marginBottom: 12,
          }}
          color="textSecondary"
        >{desc}
        </Typography>
      </CardContent>
      </Box>
    </Card>
</>
    )
   
}
export default KBCard;