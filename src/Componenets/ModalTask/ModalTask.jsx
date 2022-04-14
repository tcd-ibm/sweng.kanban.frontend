import React, { useState } from 'react'
import { Dialog, Box, Typography, TextField, Button, Select, MenuItem, InputLabel } from '@mui/material'
import axios from 'axios';
import { useQuery } from 'react-query';


const ModalTask = ({ open, onClose, swimlaneData }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [swimlaneId, setSwimlaneId] = useState('')
    const { refetch } = useQuery('kanbanBoards', { enabled: false })

    const CreateTask = async () => {
        const headers = {
            'Content-Type': 'application/json'
        }
        const { REACT_APP_API_ENDPOINT } = process.env;
        await axios.post(
            `${REACT_APP_API_ENDPOINT}/createTask`,
            {
                taskTitle: `${taskTitle}`,
                taskDescription: `${taskDescription}`,
                swimLaneId: `${swimlaneId}`
            },
            headers);
        refetch()
    }

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
                    <TextField label="Task Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
                    <TextField label="Task description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                    <InputLabel>Choose Swimlane</InputLabel>
                    <Select label="Choose Swimlane" value={swimlaneId} onChange={(e) => setSwimlaneId(e.target.value)}>
                        {swimlaneData ? swimlaneData?.map(s =>
                            <MenuItem value={s._id} key={s._id}>{s.swimLaneTitle}</MenuItem>
                        ) : <MenuItem key={'NAN'}> No swimlane available</MenuItem>}
                    </Select>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    borderRadius: 1,
                }}>
                    <Button variant="contained" onClick={() => { CreateTask(); onClose(); }}>Create Task</Button>
                </Box>
            </Box>
        </Dialog>
    )
}
export default ModalTask