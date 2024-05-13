import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface IGameWinNumberProps {
  value: number;
}
const GameWinNumber: FC<IGameWinNumberProps> = ({ value }) => {
  return (
    <Box
      style={{
        width: '100%',
        background: 'rgba(0, 0, 0, 0.04)',
        padding: '44px 0',
      }}
    >
      <Typography
        style={{
          fontSize: '96px',
          textAlign: 'center',
        }}
      >
        {value}
      </Typography>
    </Box>
  )
}

export default GameWinNumber
