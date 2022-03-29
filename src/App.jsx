import './App.css';
import SwimLane from './Componenets/SwimLane';
import { Box, Button, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import React from "react";



const data = [{title:"A title" , desc: "1234"}, {title: "Placeholder task", desc: "4321"}, {title: "Group 31", desc: "100/100"}, {title: "IBM open-audio-software", desc: "Never Forget"} ];
const swimlanes=[
                  {cards: [data[0], data[1], data[2]], title:"To Do" },
                  {cards: [data[3], data[2], data[0]], title:"In Progress"},  
                  {cards: [data[0], data[1], data[2]], title:"Done" }
                ] 

const KanbanGETRequest = async () =>{
                  
 const data = await axios.get('http://kanbanbackend-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/listAllKanbanBoards')
        .then(res => { return res})
        return data
      
     
    }
function App() {
  const {data, isSuccess, isError, isLoading, refetch} =  useQuery('kanbanBoards', KanbanGETRequest, {enabled: false })
  const swimLaneData = data ? data.data[0].kanbanBoardSwimLanes : null;
  return (
    <>
    <Button variant="contained" onClick={refetch} size="large" color="primary">
      <RefreshIcon />
      <Typography>
        Fetch Data
      </Typography>
    </Button>

    
    <Box sx={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 1,
      m: 1,
      borderRadius: 1,
    }}>
      {swimLaneData?.map(lane => 
        <SwimLane swimLaneData = {lane.kanbanSwimLaneTasks} swimLaneTitle={lane.swimLaneTitle} />
        )}
      
    
    
    </Box> 
    </>
  );
}

export default App;
