import React from 'react';
import {Typography, CardContent, Card, Select, MenuItem, InputLabel} from '@material-ui/core';
import { Box } from '@mui/system';
import axios from 'axios';

const MoveTask = async () => {
  const headers = {
    'Content-Type': 'application/json'
}

await axios.post(
    'http://kanbanbackend-dev-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/moveTask',
    {
        oldSwimlane: "todo",
        targetSwimlane: "doing",
        taskTitle: "Test Task Title",
        taskDescription: "Test Task Description"
    },
    headers);
}

const KBCard = ({title, desc, id, swimLaneTitle }) => {
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
      <Box>
      <InputLabel>Move to</InputLabel>
          <Select
            value={swimLaneTitle}
            label="SwimLane"
            onChange={MoveTask}
            >
              <MenuItem>todo</MenuItem>
              <MenuItem>doing</MenuItem>
              <MenuItem>done</MenuItem>
          </Select>
          </Box>
      </Box>
    </Card>
</>
    )
   
}
export default KBCard;