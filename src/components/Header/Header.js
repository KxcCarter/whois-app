import React from 'react';

import { Box, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <Box mx="auto" p={3}>
      <Typography variant="h2">Movie List</Typography>
    </Box>
  );
};

export default Header;
