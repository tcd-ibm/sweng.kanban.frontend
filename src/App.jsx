import './App.css';
import SwimLane from './Componenets/SwimLane';
import { Box, Typography, Button } from '@material-ui/core';
import {CircularProgress} from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import React from "react";
import Modal from '@mui/material/Modal';




 const KanbanGETRequest = async () =>{
                  
 const data = await axios.get('http://kanbanbackend-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/listAllKanbanBoards')
.then(res => { return res})
return data
                       
 }
 

function App() {
  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

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

  
    <Button variant="outlined" onClick={handleOpen}>New Card</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="card"
      //aria-describedby="modDesc"
    >
   
    
    
     <Box sx={{

      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 1,
      m: 1,
      borderRadius: 1,
    }}>

      

      { isLoading ? <CircularProgress /> :
      swimLaneData?.map(lane => 
        <SwimLane swimLaneData = {lane.kanbanSwimLaneTasks} swimLaneTitle={lane.swimLaneTitle} key={lane._id}/>
        )
      
    
    
      }
      </Box> 
      </Modal>

    </>
  )
}

export default App;
