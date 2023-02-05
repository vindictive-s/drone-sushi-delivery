import styled from "styled-components";

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  background: #e2e2e2;
  border: 2px solid #e2e2e2;
  border-radius: 10px;
  grid-area: input;
  transition: 0.2 ease-in-out;

  ::placeholder {
    color: #fb6d49;
  }

  &:hover {
    border: none;
    border: 2px solid #fb6d49;
    transition: 0.2 ease-in-out;
  }
`;
