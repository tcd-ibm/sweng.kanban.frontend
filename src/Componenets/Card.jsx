import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from '@mui/system';

const Card = ({}) => {
    return (
<div style={{}}>
    <Card>
    <Box sx={{ p: 2, display: 'flex' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Card Title
        </Typography>
        <Typography
          style={{
            marginBottom: 12,
          }}
          color="textSecondary"
        >Some text description
        </Typography>
      </CardContent>
      </Box>
    </Card>
  </div>
    )
   
}
export default Card;