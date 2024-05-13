import { FC, useState, useMemo  } from 'react';
import { Slider, Typography, Box } from '@mui/material';

import { isFunction } from "@/utils/is";
import { createMarks } from "./createMarks";

interface IDiceSliderProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  marks?: number;
  isMarksLabel?: boolean;
  handleChange?: (data: number) => void
}

const DiceSlider: FC<IDiceSliderProps> = ({
  defaultValue = 0,
  min = 0,
  max = 100,
  marks,
  isMarksLabel = false,
  handleChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    
    if (isFunction(handleChange)) {
      handleChange(newValue as number);
    }
  };
  
  const marksPoints = useMemo(() => {
    if (!marks) return false

    const maxMarks = createMarks(max, marks, isMarksLabel)
    
    return maxMarks
  }, [marks, max])
  

  return (
    <Box style={{width: '100%'}}>
      <Slider
        value={value}
        onChange={handleOnChange}
        aria-labelledby="input-slider"
        valueLabelDisplay="auto"
        min={min}
        max={max}
        marks={marksPoints}
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',           
        width: '100%',                  
        
      }}>
        <Typography>0</Typography>
        <Typography>{max}</Typography>
      </Box>
    </Box>
  );
};

export default DiceSlider;
