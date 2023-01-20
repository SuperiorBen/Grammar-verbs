import { FormControl, InputLabel, Select, MenuItem } from "../../../helpers";
import './select-style.css'

export const SelectCustom = ({getVerbs, verbType}) => {
  return (
    <FormControl className='select-verb' color="outlineCustom">
        <InputLabel id="demo-simple-select-label">Verb type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={getVerbs}
          value={verbType}
        >
          <MenuItem value={1}>Irregular verbs</MenuItem>
          <MenuItem value={2}>Regular verbs</MenuItem>
          <MenuItem value={3}>Both types</MenuItem>
        </Select>
      </FormControl>
  )
}
