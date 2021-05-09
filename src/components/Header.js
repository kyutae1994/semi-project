import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일 관리!!
const StyledHeaButtoderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledHeadLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
    <div>
      <StyledHeaButtoderDiv backgroundColor={'blue'}>
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaButtoderDiv>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              홈
            </Link>
            <Link to="/login" className="nav-link">
              로그인
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
