import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchDiv = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px;
  z-index: 10;
  margin: 0 auto;
  background-color: #f2f2f2;
`;

export const StyledSearchIcon = styled(IoSearchOutline)`
  color: #fff;
  font-size: 30px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  width: 100%;
  margin-bottom: 40px;
  max-width: 600px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #7d7c7c8f;

  button {
    width: 48px;
    height: 48px;
    border: 0;
    background: #89d0bc;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  span {
    font-size: 30px;
  }

  button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 20px;
    padding-right: 4px;
    background: transparent;
    color: #333;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
    color: #333;
  }
`;
