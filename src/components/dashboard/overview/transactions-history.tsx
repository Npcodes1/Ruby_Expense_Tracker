import * as React from 'react';
import { Box, Card, CardHeader, Chip, Divider, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import type { SxProps } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import dayjs from 'dayjs';

const statusMap = {
  income: { label: 'income', color: 'success' },
  expense: { label: 'expense', color: 'error' },
} as const;

export interface Transactions {
  id: string;
  category: string;
  name: string;
  amount: number;
  note: string;
  status: 'income' | 'expense';
  date: Date;
}

export interface TransactionsHistoryProps {
  transactions?: Transactions[];
  sx?: SxProps;
}

export function TransactionsHistory({ transactions = [], sx }: TransactionsHistoryProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Transactions History" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Note</TableCell>
              <TableCell sortDirection="desc">Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => {
              const { label, color } = statusMap[transaction.status] ?? { label: 'Unknown', color: 'default' };

              return (
                <TableRow hover key={transaction.id}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>{transaction.name}</TableCell>
                  <TableCell>{dayjs(transaction.date).format('MMM D, YYYY')}</TableCell>
                  <TableCell>
                    <Chip color={color} label={label} size="small" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions> */}
    </Card>
  );
}
