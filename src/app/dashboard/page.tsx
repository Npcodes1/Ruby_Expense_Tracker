import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
// import { SpendingCategories} from '@/components/dashboard/overview/spending-categories'
import { TotalExpense } from '@/components/dashboard/overview/total-expense';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { TransactionsHistory } from '@/components/dashboard/overview/transactions-history';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalExpense diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>
      {/* <Grid lg={8} xs={12}>
        <SpendingCategories
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid> */}
      <Grid lg={8} md={12} xs={12}>
        <TransactionsHistory
          transactions={[
            {
              id: '001',
              category: 'expense',
              name: '',
              amount: 30.5,
              note: 'Movie tickets',
              status: 'pending',
              date: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
