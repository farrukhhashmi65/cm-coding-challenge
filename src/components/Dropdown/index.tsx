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
  dropdownList?: any[]
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onSelect,
  dropdownList = []
}): JSX.Element => {
  const handleChange = (event: SelectChangeEvent): void => {
    onSelect(event.target.value)
  }

  return (
        <Box sx={{ flexGrow: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="simple-select-label" data-testid="dropdownLabel">{label}</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    data-testid="selectInput"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {dropdownList?.map((d: string, index: number) => (

                      <MenuItem value={d} key={index}>{d}</MenuItem>

                    ))}

                </Select>
            </FormControl>
        </Box>
  )
}

export default Dropdown
