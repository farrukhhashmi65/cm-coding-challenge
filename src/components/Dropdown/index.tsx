import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface DropdownProps {
  label: string
  value: string
  onSelect: Function
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onSelect
}): JSX.Element => {
  const handleChange = (event: SelectChangeEvent): void => {
    onSelect(event.target.value)
  }

  return (
        <Box sx={{ flexGrow: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Vacations</MenuItem>
                    <MenuItem value={20}>Sickness</MenuItem>
                </Select>
            </FormControl>
        </Box>
  )
}

export default Dropdown
