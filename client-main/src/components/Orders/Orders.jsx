import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const rows = [
  {
    id: 1,
    date: '-',
    name: '-',
    amount: '-',
  }
]
export default function Orders() {
  useEffect(() => {

  }, [])
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Дата и время</TableCell>
            <TableCell>Номер фигуры</TableCell>
            <TableCell align="right">Стоимость</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
