import React from 'react';
import styled from '@emotion/styled';

const Author = styled.input`
  border: 5px solid #8b7e7e;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  min-width: 500px;
  padding: 10px;
  margin-top: 10px;
`;

export default function AuthorInput(props) {
  return <Author placeholder="enter your name" autoFocus {...props} />;
}
