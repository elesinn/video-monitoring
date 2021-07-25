import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { activeFacilityIdState, notesListState } from '../../state/atoms';
import { Button, Input } from 'antd';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { Severities } from '../../constants';

// utility for creating unique Id
let id = 1;
const getId = () => {
  return id++;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddNotes = () => {
  const [inputValue, setInputValue] = useState('');
  const setNotesList = useSetRecoilState(notesListState);
  const activeFacility = useRecoilValue(activeFacilityIdState);

  const addItem = () => {
    setNotesList((oldNotesList) => {
      const randomSeveryty = Severities[Math.floor(Math.random() * 3)];

      return {
        ...oldNotesList,
        [activeFacility]: [
          ...(oldNotesList && oldNotesList[activeFacility]
            ? oldNotesList[activeFacility]
            : []),
          {
            id: getId(),
            text: inputValue,
            severity: randomSeveryty,
            time: Date.now(),
          },
        ],
      };
    });
    setInputValue('');
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <InputWrapper>
      <Button type="primary" icon={<PlusOutlined />} onClick={addItem} />
      <Input
        placeholder="Add your notes here"
        value={inputValue}
        onChange={onChange}
      />
    </InputWrapper>
  );
};
