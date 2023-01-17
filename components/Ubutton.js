import React from 'react'
import Button from '@mui/material/Button';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LinearProgress from '@mui/material/LinearProgress';

function Ubutton() {
  return (
    <div  className='ubtn'>
        <Button variant="outlined" startIcon={<MovieCreationIcon></MovieCreationIcon>} style={{marginTop:"1rem"}} fullWidth component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>  
            <LinearProgress variant="determinate" sx={{marginTop:"0.3rem"}} value={50} />
    </div>
  )
}

export default Ubutton