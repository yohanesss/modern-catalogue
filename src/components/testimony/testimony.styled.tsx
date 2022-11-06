import styled from "styled-components";

export const TestimonyContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const TestimonyCard = styled.div`
  box-shadow: 0px 1px 5px 0 gainsboro;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  display: flex;
  width: 40%;
`;

export const TestimonyAvatar = styled.img`
  width: 30%;
  max-width: 200px;
  height: 100%;
`;

export const TestimonyDetailContainer = styled.div`
  width: 70%;
  padding: 10px;
`;

export const UserName = styled.div`
  font-weight: bold;
  color: #16181d;
`;

export const UserStory = styled.div`
  color: darkslategray;
  margin-top: 10px;
  font-size: 0.9rem;
`;

export const UserJob = styled.div`
  color: indianred;
  font-size: 0.8rem;
  margin-top: 10px;
  font-weight: bold;
`;
