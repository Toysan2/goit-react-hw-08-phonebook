import React from 'react';
import { Input } from '@chakra-ui/react';

function Filter({ onFilterChange }) {
  return (
    <Input
      placeholder="Filter contacts..."
      onChange={e => onFilterChange(e.target.value)}
    />
  );
}

export default Filter;
