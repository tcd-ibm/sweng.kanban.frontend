import React, { useState } from 'react'
import axios from 'axios'
import { Dialog, DialogTitle, DialogContent, Typography, TextField, Button, DialogActions } from '@mui/material'
import { useQuery } from 'react-query'

const SwimlaneDialog = ({ open, handleClose, kanbanId, }) => {
    const [swimLaneTitle, setSwimLaneTitle] = useState('')
    const { refetch } = useQuery('kanbanBoards', { enabled: false })

    const CreateSwimLane = async () => {
        const headers = {
            'Content-Type': 'application/json'
        }
        const { REACT_APP_API_ENDPOINT } = process.env;
        await axios.post(
            `${REACT_APP_API_ENDPOINT}/addSwimLaneToBoard`,
            {
                kanbanBoardId: `${kanbanId}`,
                swimLaneTitle: `${swimLaneTitle}`
            },
            headers);
        refetch()
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add swimlane</DialogTitle>
            <DialogContent>
                <Typography>
                    Enter Swimlane Title
                </Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Swimlane name"
                    value={swimLaneTitle}
                    onChange={(e) => setSwimLaneTitle(e.target.value)}
                    type="Swimlane name"
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
export default SwimlaneDialog