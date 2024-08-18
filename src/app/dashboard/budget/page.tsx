import * as React from 'react';
import type { Metadata } from 'next';
import {Box, Button, Stack, Typography} from '@mui/material'
// import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
// import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { BudgetFilters } from '@/components/dashboard/budget/budget-filters';
import { Budget, BudgetTable } from '@/components/dashboard/budget/budget-table';

export const metadata = { title: `Budget Tracker | Dashboard | ${config.site.name}` } satisfies Metadata;

const Budget = [
  {
    id: '001',
    name: 'Movies',
    category: 'expense',
    amount: 30,
    date: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: '002',
    name: 'Pay Day',
    category: 'income',
    amount: 700,
    date: dayjs().subtract(2, 'hours').toDate(),
  },
] satisfies Budget[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedBudget = applyPagination(Budget, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Budget Tracker</Typography>
          {/* <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button> */}
          
  
        {/* Add Button */}
        <Stack direction="row">
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>

        {/* Edit Button */}
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Edit
          </Button>
        </div>
        {/* Delete Button */}
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Delete
          </Button>
        </div>
        </Stack>
      </Stack>
 </Stack>
      <BudgetFilters />
      <BudgetTable count={paginatedBudget.length} page={page} rows={paginatedBudget} rowsPerPage={rowsPerPage} />
    </Stack>
  );
}

function applyPagination(rows: Budget[], page: number, rowsPerPage: number): Budget[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
