import { FC, ChangeEvent, useState } from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import {isFunction} from "@/utils/is";

export type RangeTypes = "under" | "over";
interface IRangeTypeProps {
  type: RangeTypes;
  handleChange?: (data: RangeTypes) => void
}
  
const RangeType: FC<IRangeTypeProps> = ({ type = "under", handleChange }) => {
  const [choice, setChoice] = useState(type);
  
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value as RangeTypes;

    setChoice(newValue)
    
    if (isFunction(handleChange)) {
      handleChange(newValue)
    }
  }
  
  return (
    <FormControl component="fieldset">
      <RadioGroup row value={choice} onChange={handleOnChange}>
        <FormControlLabel value="under" control={<Radio />} label="Under" labelPlacement="start"/>
        <FormControlLabel value="over" control={<Radio />} label="Over" labelPlacement="start" />
      </RadioGroup>
    </FormControl>
  );
};

export default RangeType;
