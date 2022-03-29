import React from 'react';
import {Typography, CardContent, Card} from '@material-ui/core';
import { Box } from '@mui/system';

const KBCard = ({title, desc, id }) => {
    return (
<>
    <Card testid="card" key={id}>
    <Box sx={{ bgcolor: '#FBFFC8', p: 2, display: 'flex', my:2, border:1 }}>
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