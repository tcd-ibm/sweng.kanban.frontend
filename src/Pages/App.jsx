import SwimLane from '../Componenets/SwimLane/SwimLane';
import { Box, Button, Typography } from '@material-ui/core';
import {CircularProgress} from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import ModalTask from './Componenets/ModalTask/ModalTask';
import React from "react";




 const KanbanGETRequest = async () =>{
                  
 const data = await axios.get('http://kanbanbackend-dev-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/listAllKanbanBoards')
.then(res => { return res})
return data
                       
 }
 

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const allKanban =  useQuery('kanbanBoards', KanbanGETRequest, {enabled: false })
  const swimLaneData = allKanban.data ? allKanban.data.data[0].kanbanBoardSwimLanes : null;
  console.log(swimLaneData)

  return (
    <>

    <Button variant="contained" onClick={refetch} size="large" color="primary">
      <RefreshIcon />
      <Typography>
        Fetch Data
      </Typography>
    </Button>

  
    <Button variant="outlined" onClick={handleOpen}>New Card</Button>
    <ModalTask
      open={open}
      onClose={handleClose}
      aria-labelledby="card"
      refetch={refetch}
      //aria-describedby="modDesc"
    >
      </ModalTask>
   
    
    
     <Box sx={{

      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 1,
      m: 1,
      borderRadius: 1,
    }}>

      

      { allKanban.isLoading ? <CircularProgress /> :
      swimLaneData?.map(lane => 
        <SwimLane swimLaneData = {lane.kanbanSwimLaneTasks} swimLaneTitle={lane.swimLaneTitle} key={lane._id}/>
        )}
      </Box> 

    </>
  )
}

export default App;
