import { Grid, TextField } from '@mui/material'
import React from 'react'

function input(half,name,handleChange,label,type,) {
  return (
    <Grid item xs={12} sm={half?6:12}>

<TextField name={name} onChange={handleChange} variant='outlined' required fullWidth label={label} type={type} />
    </Grid>
    
  )
}

export default input