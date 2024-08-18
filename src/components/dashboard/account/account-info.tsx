'use client';

import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, Divider, Stack, TextField, Typography } from '@mui/material';

export function AccountInfo(): React.JSX.Element {
  const [user, setUser] = useState({
    name: '',
    avatar: '',
    jobTitle: '',
    country: '',
    city: '',
    timezone: '',
  });

  return (
    <Card>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src={user.avatar} sx={{ height: '80px', width: '80px' }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography variant="h5">{user.name}</Typography>
            <Typography color="text.secondary" variant="body2">
              {user.city} {user.country}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.timezone}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}
