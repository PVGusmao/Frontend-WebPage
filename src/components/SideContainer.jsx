import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import DemoCards from './DemoCards';

function SideContainer(props) {
  const { boards, setBoards } = props;
  
  return (
    <Side>
      <Notification>
        <NotificationTitle>Endomarketing</NotificationTitle>
        <NotificationText>
          Endomarketing está relacionado às ações de treinamento ou
          qualificação dos colaboradores da empresa visando um melhor
          serviço para o cliente. Marketing interno, devido ao nome, é
          usualmente confundido com Endomarketing mesmo sendo conceitos
          diferentes.
        </NotificationText>
        <Dispatch>DISPENSAR</Dispatch>
      </Notification>
      <Management>
        <TitleManagement>Quadros de Gestão à Vista</TitleManagement>
        {
          boards.length &&
            boards.map((element, index) => (
              <DemoCards
                element={ element }
                key={ index }
                setBoards={ setBoards }
                boards={ boards }
              />
            ))
        }
      </Management>
    </Side>
  );
}

const Side = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 31.5px;

  @media (max-width: 1100px) {
    background-color: #f2f3f5;
    justify-content: space-evenly;
    flex-direction: row;
    margin-left: 0px;
    padding-bottom: 20px;
    width: 100%;
  }

  @media (max-width: 615px) {
    flex-direction: column; 
  }
`;

const Notification = styled.section`
  background-color: #fff2de;
  border: 1px solid #dcd1c0;
  height: 340px;
  margin-top: 36px;
  width: 278px;

  @media (max-width: 1100px) {
    margin-top: 10px;
  }
`;

const NotificationTitle = styled.p`
  color: #707070;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  height: 19px;
  line-height: 19px;
  margin: 29px 143px 12px 21px;
  width: 115px;
`;

const NotificationText = styled.p`
  color: #707070;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  height: 152px;
  line-height: 19px;
  margin: 0px 21px 20px 21px;
  width: 236px;
`;

const Dispatch = styled.button`
  background: none;
  border: none;
  border: 1px solid #707070;
  border-radius: 5px;
  color: #707070;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  height: 37px;
  line-height: 15px;
  margin: 0px 145px 30px 21px;
  outline: inherit;
  padding: 0;
  width: 112px;
`;

const Management = styled.section`
  background: #fdfdfd;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  height: 333px;
  margin-top: 25px;
  padding: 10px;
  width: 279px;

  @media (max-width: 1100px) {
    border-radius: 0px;
    height: 340px;
    margin-top: 10px;
  }
`;

const TitleManagement = styled.p`
  color: #707070;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  height: 19px;
  line-height: 19px;
  width: 191px;
`;

SideContainer.propTypes = {
  setBoards: PropTypes.func,
  boards: PropTypes.instanceOf(PropTypes.object),
}.isRequired;

export default SideContainer;
