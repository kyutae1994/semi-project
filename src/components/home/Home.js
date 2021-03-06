import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Home = (props) => {
  // 구조분할 할당
  const StyledDeleteButton = styled.button`
    color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  `;

  // 스타일 확장
  const StyledAddButton = styled(StyledDeleteButton)`
    color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
    background-color: green;
  `;

  const { boards, setBoards, user } = props;
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
