import React from 'react';
import { NextPage } from 'next';
import { FormLabel } from '@chakra-ui/react';
import { Input } from 'components/Input';

type Props = {
  id: number;
  word: string;
  meaning: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  setMeaning: React.Dispatch<React.SetStateAction<string>>;
  firstInputRef: React.RefObject<HTMLInputElement>;
};

export const Form: NextPage<Props> = ({
  id, word, meaning, setWord, setMeaning, firstInputRef,
}) => {
  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const onChangeMeaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeaning(e.target.value);
  };

  return (
    <>
      <FormLabel htmlFor="id">id</FormLabel>
      <Input
        id="id"
        value={id}
        isDisabled
      />
      <FormLabel htmlFor="word">word</FormLabel>
      <Input
        id="word"
        value={word}
        onChange={onChangeWord}
        ref={firstInputRef}
      />
      <FormLabel htmlFor="meaning">meaning</FormLabel>
      <Input
        id="meaning"
        value={meaning}
        onChange={onChangeMeaning}
      />
    </>
  );
};
