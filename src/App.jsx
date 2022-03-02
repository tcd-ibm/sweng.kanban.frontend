import logo from './logo.svg';
import './App.css';
import SwimLane from './Componenets/SwimLane';
import { Box } from '@material-ui/core';

const data = [{title:"A title" , desc: "1234"}, {title: "Placeholder task", desc: "4321"}, {title: "Group 31", desc: "100/100"}, {title: "IBM open-audio-software", desc: "Never Forget"} ];
const swimlanes=[
                  {cards: [data[0], data[1], data[2]], title:"To Do" },
                  {cards: [data[3], data[2], data[0]], title:"In Progress"},  
                  {cards: [data[0], data[1], data[2]], title:"Done" }
                ]

function App() {
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
