import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const ActivityForm = () => {

  const [activity, setActivity] = useState({
    type: "RUNNING", duration: '', caloriesBurned: '',
    additionalMetrics: {}
  });

  return (
    <div>
      <Box component="form" sx={{ mb: 2 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Activity Type</InputLabel>
          <Select
            value={activity.type}
            onChange={(e) => {setActivity({...activity, type: e.target.value})}}
          >
            <MenuItem value="RUNNING">Running</MenuItem>
            <MenuItem value="WALKING">Walking</MenuItem>
            <MenuItem value="CYCLING">Cycling</MenuItem>
          </Select>
        </FormControl>

        <TextField fullWidth 
        label="Duration"
        type="number"
        sx={{mb: 2}}
        value={activity.duration}
        onChange={(e) => {setActivity({...activity, duration: e.target.value})}}
        /> 

        <TextField fullWidth 
        label="calories Burned"
        type="number"
        sx={{mb: 2}}
        value={activity.caloriesBurned}
        onChange={(e) => {setActivity({...activity, caloriesBurned: e.target.value})}}
        /> 

        <Button type='submit' variant='contained'>
          Add Activity
        </Button>

      </Box>
    </div>
  )
}

export default ActivityForm
