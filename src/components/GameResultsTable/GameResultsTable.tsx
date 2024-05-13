import { FC } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { TableCellColor } from './TableCellColor'

export interface IGameResult {
  time: string;
  guess: string;
  result: number;
  status: 'success' | 'fail';
}

interface IGameResultsTableProps {
  results: IGameResult[];
}

const GameResultsTable: FC<IGameResultsTableProps> = ({ results = [] }) => {
  if (!results.length) return null
  
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="left">Guess</TableCell>
            <TableCell align="left">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="left">{row.guess}</TableCell>
              <TableCellColor align="left" isSuccess={row.status === 'success'}>
                {row.result}
              </TableCellColor>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameResultsTable;
