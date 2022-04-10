import React from 'react'
import {Dialog, Box, Typography, TextField, Button} from '@mui/material'
import axios from 'axios';

const CreateTask = async () => {
    const headers = {
        'Content-Type': 'application/json'
    }
    
    await axios.post(
        'http://kanbanbackend-dev-petrukhp-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/createTask',
        {
            taskTitle: "Test Task Title",
            taskDescription: "Test Task Description",
            swimlaneTitle: "todo"
        },
        headers);
}

const ModalTask = ({open, onClose,}) => {
    
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                p: 1,
                m: 1,
                borderRadius: 1,
              }}>
                <Typography> Create New Task</Typography>
                <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'row',
                p: 1,
                m: 1,
                borderRadius: 1,
              }}>
                <TextField label="Task Title"defaultValue="Test Task Title"/>
                <TextField label="Task description" defaultValue="Test Task Description" />
                </Box>
                <Box sx={{
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'row',
                p: 1,
                m: 1,
                borderRadius: 1,
              }}>
                  <Button variant="contained" onClick={() => {CreateTask(); onClose();}}>Create Task</Button>
                </Box>
            </Box>
        </Dialog>
    )
}
export default ModalTask