import { NavLink } from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <Links>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/staff">Staff</NavLink>

          <NavLink to="/episodes">Episodes</NavLink>

          <NavLink to="/news">News</NavLink>
        </Links>
      </nav>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
  nav {
    display: flex;
    width: 100%;
  }
  margin-bottom: 40px;
`;

const Links = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 8px 10px 0px #1e1e1e5e;
  a {
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    a {
      color: white;
    }
  }
  a.active {
    background-color: #0000008e;
    transition: 0.2s ease-in-out;
    font-weight: 600;
    color: gold;
  }
`;
