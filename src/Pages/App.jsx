import SwimLane from '../Componenets/SwimLane/SwimLane';
import { Box, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import { CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import ModalTask from '../Componenets/ModalTask/ModalTask';
import React, { useState } from "react";
import KanbanDialog from '../Componenets/KanbanDialog/KanbanDialog';
import SwimlaneDialog from '../Componenets/SwimlaneDialog/SwimlaneDialog';




const KanbanGETRequest = async () => {
  const { REACT_APP_API_ENDPOINT } = process.env;
  const data = await axios.get(`${REACT_APP_API_ENDPOINT}/listAllKanbanBoards`)
    .then(res => { return res })
  return data

}


function App() {
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [createKanbanOpen, setCreateKanbanOpen] = useState(false);
  const [swimlaneDialogOpen, setSwimlaneDialogOpen] = useState(false);
  const handleTaskDialogOpen = () => setTaskDialogOpen(true);
  const handleTaskDialogClose = () => setTaskDialogOpen(false);
  const handleCreateKanbanOpen = () => setCreateKanbanOpen(true);
  const handleCreateKanbanClose = () => setCreateKanbanOpen(false);
  const handleSwimlaneOpen = () => setSwimlaneDialogOpen(true);
  const handleSwimlaneClose = () => setSwimlaneDialogOpen(false);

  const allKanban = useQuery('kanbanBoards', KanbanGETRequest,)
  const [kanbanId, setKanbanId] = useState(allKanban.data ? allKanban.data.data[0]._id : '');
  const kanbanData = allKanban.data ? kanbanId ? allKanban.data.data.filter(board => board._id === kanbanId) : allKanban.data.data[0] : null;
  const swimLaneData = kanbanData ? kanbanData[0]?.kanbanBoardSwimLanes : null;
  console.log(allKanban.data)

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', m: 5 }}>
        <Box sx={{ display: 'flex', ml: 5 }}>
          <Button variant="outlined" onClick={handleTaskDialogOpen} size='large' disabled={!allKanban?.isSuccess}>New Card</Button>
          <ModalTask
            open={taskDialogOpen}
            onClose={handleTaskDialogClose}
            aria-labelledby="card"
            swimlaneData={swimLaneData}
          >
          </ModalTask>
        </Box>
        <Box sx={{ display: 'flex', ml: 5 }} >
          <Button variant='outlined' onClick={handleSwimlaneOpen}>Add Swimlane</Button>
          <SwimlaneDialog open={swimlaneDialogOpen} handleClose={handleSwimlaneClose} kanbanId={kanbanId} />
        </Box>
        <Box sx={{ display: 'flex', ml: 5 }} >
          <InputLabel>Choose Board</InputLabel>
          <Select label='Select Board' value={kanbanId?._id} onChange={(e) => setKanbanId(e.target.value)}>
            {allKanban?.data?.data?.map(board =>
              <MenuItem key={board._id} value={board._id}>{board.kanbanBoardTitle}</MenuItem>
            )}
          </Select>
        </Box>
        <Box sx={{ ml: 5 }} >
          <Button variant="outlined" onClick={handleCreateKanbanOpen} size='large' disabled={!allKanban?.isSuccess}>New Board</Button>
          <KanbanDialog open={createKanbanOpen} handleClose={handleCreateKanbanClose} />
        </Box>

      </Box>

      <Box sx={{

        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        p: 1,
        m: 1,
        borderRadius: 1,
      }}>



        {allKanban.isLoading ? <CircularProgress /> :
          swimLaneData?.map(lane =>
            <SwimLane kanbanData={swimLaneData} swimLaneData={lane.kanbanSwimLaneTasks} swimLane={lane} key={lane?._id} kanbanId={kanbanData[0]._id} />
          )}
      </Box>

    </>
  )
}

export default App;
