import React, { useState } from 'react'
import axios from 'axios'
import { Dialog, DialogTitle, DialogContent, Typography, TextField, Button, DialogActions } from '@mui/material'
import { useQuery } from 'react-query'

const KanbanDialog = ({ open, handleClose, }) => {
    const [kanbanTitle, setKanbanTitle] = useState('')
    const { refetch } = useQuery('kanbanBoards', { enabled: false })

    const CreateSwimLane = async () => {
        const headers = {
            'Content-Type': 'application/json'
        }
        const { REACT_APP_API_ENDPOINT } = process.env;
        await axios.post(
            `${REACT_APP_API_ENDPOINT}/createNewKanbanBoard`,
            {
                title: `${kanbanTitle}`
            },
            headers);
        refetch()
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Board </DialogTitle>
            <DialogContent>
                <Typography>
                    Enter Board Title
                </Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Kanban name"
                    value={kanbanTitle}
                    onChange={(e) => setKanbanTitle(e.target.value)}
                    type="Kanban name"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => { CreateSwimLane(); handleClose(); }}>Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}
export default KanbanDialog