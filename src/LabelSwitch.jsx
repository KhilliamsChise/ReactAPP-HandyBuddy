// A imported switch button from material-ui with functionality to pass a switch value

import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function SwitchLabels(props) {
    const [checked, setChecked] = useState(false); // State variable to hold the switch value
  
    const handleChange = (event) => {
      setChecked(event.target.checked); // Update the state when the switch is toggled
    };
  
    useEffect( () => {
        props.addSwitchProp(checked);

    },[checked]);

    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Note</Typography>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
        />
        <Typography>To-do</Typography>
      </Stack>
    );
  }
