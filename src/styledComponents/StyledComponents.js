import styled from "styled-components";

export const headerFont = styled.h1`
  font-size: 40px;
  margin: 1% 45%;

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 1% 10%;
  }
`;

export const Header = styled.div`
  background-color: lightgreen;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const inputForm = styled.div`
  margin: 30px auto 5px auto;
  padding: 20px;
  justify-content: center;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const inputBox = styled.input`
  padding: 10px;
  border-radius: 18px;
  display: inline-block;
  margin: 5px 50px;
  width: 250px;
  height: 20px;
  border: none;

  @media (max-width: 768px) {
    margin: 5px;
    width: 80%;
  }
`;

export const submitButton = styled.button`
  border-radius: 20px;
  width: 60px;
  height: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #ffffff;
  background-color: #4caf50;
  font-size: 15px;

  &:hover {
    background-color: #ffffff;
    border: 1px solid green;
    color: #4caf50;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const contentBox = styled.div`
  border: 1px solid white;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 450px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const buttonBox = styled.div`
  margin-left: 200px;
  padding-left: 105px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    text-align: center;
  }
`;

export const todoListConfirmButton = styled.button`
  border-radius: 20px;
  width: 60px;
  height: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #ffffff;
  background-color: #4caf50;
  font-size: 15px;
  display: inline-block;
  margin: 5px;

  &:hover {
    background-color: #ffffff;
    border: 1px solid green;
    color: #4caf50;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const todoListDeleteButton = styled.button`
  border-radius: 20px;
  width: 60px;
  height: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #ffffff;
  background-color: #4caf50;
  font-size: 15px;
  display: inline-block;
  margin: 5px;

  &:hover {
    background-color: #ffffff;
    border: 1px solid green;
    color: #4caf50;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const todoListContainer = styled.div`
  width: 30%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const todoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
