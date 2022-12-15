import React, { memo } from 'react';
import { NextPage } from 'next';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { useGetArrangedWords } from './api/useGetArrangedWords';
import { AddButton } from './components/AddButton';
import { Item } from './components/Item';

export const WordForm: NextPage = memo(() => {
  const { loading, items, nextId } = useGetArrangedWords();

  return (
    <Card darkMode centerText>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {items.map((item, index) => (
          <Box key={item.word_id}>
            <Item index={index + 1} defaultWordItem={item} />
          </Box>
        ))}
        <AddButton nextId={nextId} />
      </Flex>
      {loading && <Spinner />}
    </Card>
  );
});
