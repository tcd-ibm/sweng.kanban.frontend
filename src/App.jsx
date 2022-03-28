import './App.css';
import SwimLane from './Componenets/SwimLane';
<<<<<<< HEAD
import { Box, Typography, Button } from '@material-ui/core';
=======
import { Box, Button, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';
>>>>>>> d310d334a4ee5fbde8fa10071fa1a25d4a88da29
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import React from "react";
<<<<<<< HEAD
import Modal from '@mui/material/Modal';
=======
>>>>>>> d310d334a4ee5fbde8fa10071fa1a25d4a88da29



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
 

<<<<<<< HEAD
 const KanbanPostRequest = async () =>({
  method: 'post',
  url: 'http://kanbanbackend-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/createTask',
  data: {
    taskTitle: 'title',
    cardDescription: 'desc',
    swimlaneTitle: 'ToDo'
  }
}); 
/*axios.post('http://kanbanbackend-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/createTask',{
  data: {
    taskTitle: 'title',
    cardDescription: 'desc',
    swimlaneTitle: 'ToDo'
  }
}) 
.then(function (response) {
  console.log(response);
}) */
function App() {
  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

=======
const KanbanGETRequest = async () =>{
                  
 const data = await axios.get('http://kanbanbackend-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/listAllKanbanBoards')
        .then(res => { return res})
        return data
      
     
    }
function App() {
  const {data, isSuccess, isError, isLoading, refetch} =  useQuery('kanbanBoards', KanbanGETRequest, {enabled: false })
  const swimLaneData = data ? data.data[0].kanbanBoardSwimLanes : null;
  console.log(data)
  return (
    <>
    <Button variant="contained" onClick={refetch} size="large" color="primary">
      <RefreshIcon />
      <Typography>
Fetch Data
      </Typography>
    </Button>
>>>>>>> d310d334a4ee5fbde8fa10071fa1a25d4a88da29

  return (
    <>
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
<<<<<<< HEAD

      {swimlanes?.map(lane => 
        <SwimLane swimLaneData = {lane.cards} swimLaneTitle={lane.title} />
=======
      {swimLaneData?.map(lane => 
        <SwimLane swimLaneData = {lane.kanbanswimLaneTasks} swimLaneTitle={lane.swimLaneTitle} />
>>>>>>> d310d334a4ee5fbde8fa10071fa1a25d4a88da29
        )}
      
    </Box> 
<<<<<<< HEAD
    </Modal>
=======
>>>>>>> d310d334a4ee5fbde8fa10071fa1a25d4a88da29
    </>
  );
}

export default App;
