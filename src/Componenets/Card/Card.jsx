import React, { useState } from 'react';
import { Typography, CardContent, Card, Select, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Box } from '@mui/system';
import axios from 'axios';
import { useQuery } from 'react-query';


const KBCard = ({ title, desc, id, swimLane, swimLaneData }) => {
  const [swimLaneId, setSwimLaneId] = useState('')
  const { refetch } = useQuery('kanbanBoards', { enabled: false })
  const MoveTask = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const { REACT_APP_API_ENDPOINT } = process.env;
    await axios.post(
      `${REACT_APP_API_ENDPOINT}/moveTask`,
      {
        oldSwimLaneId: `${swimLane._id}`,
        targetSwimLaneId: `${swimLaneId}`,
        taskId: `${id}`
      },
      headers);
    refetch()
  }

  return (
    <>
      <Card testid="card" key={id}>
        <Box sx={{ bgcolor: '#FBFFC8', p: 2, display: 'flex', m: 2, border: 1 }}>
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
          <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }}>
            <InputLabel>Move to</InputLabel>
            <Select
              value={swimLaneId}
              defaultValue={swimLane?.swimLaneTitle}
              label="SwimLane"
              onChange={(e) => setSwimLaneId(e.target.value)}
            >
              {swimLaneData?.map(s =>
                <MenuItem key={s._id} value={s._id}>{s.swimLaneTitle}</MenuItem>
              )}
            </Select>
            <Button size="small" onClick={MoveTask}>Confirm change</Button>
          </Box>
        </Box>
      </Card>
    </>
  )

}
export default KBCard;