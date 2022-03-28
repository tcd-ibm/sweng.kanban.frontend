import logo from './logo.svg';
import './App.css';
import SwimLane from './Componenets/SwimLane';
import { Box, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import React from "react";
import Modal from '@mui/material/Modal';



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

      {swimlanes?.map(lane => 
        <SwimLane swimLaneData = {lane.cards} swimLaneTitle={lane.title} />
        )}
      
    </Box> 
    </Modal>
    </>
  );
}

export default App;
