import logo from './logo.svg';
import './App.css';
import SwimLane from './Componenets/SwimLane';
import { Box } from '@material-ui/core';
import axios from 'axios';
import React from "react";
import { useEffect } from 'react';



const data = [{title:"A title" , desc: "1234"}, {title: "Placeholder task", desc: "4321"}, {title: "Group 31", desc: "100/100"}, {title: "IBM open-audio-software", desc: "Never Forget"} ];
const swimlanes=[
                  {cards: [data[0], data[1], data[2]], title:"To Do" },
                  {cards: [data[3], data[2], data[0]], title:"In Progress"},  
                  {cards: [data[0], data[1], data[2]], title:"Done" }
                ] 


function App() {

  useEffect(() => {
    axios.get('http://kanbanbackend-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/listAllKanbanBoards')
    .then(res => console.log(res.data[0]))
  },[])
  return (

    
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
  );
}

export default App;
