import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Modal from "./components/Modal";
import data from "./frontend-test/data.json";
import { connect } from "react-redux";
import management from "./frontend-test/management.json";
import styled from "styled-components";
import DemoCards from "./components/DemoCards";
import SelectCheckbox from "./components/SelectCheckbox";

function App(props) {
  const { showModal } = props;
  const [list, setList] = useState([]);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setList(data.data);
    setBoards(management.data[0].boards);
  }, []);

  const handleRemoveButton = ({ target }) => {
    const newList = list.filter((element) => element.id !== +target.id);
    setList(newList);
  }

  return (
    <Main>
      <Header />
      {
        showModal && (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "rgba(50, 50, 50, 0.2)",
              display: "flex",
              height: "100%",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
            }}
          >
            <Modal />
          </div>
        )
      }
      <ContainerWrapper>
        <Container>
          <TitleWrapper>
            <Title>Endomarketing</Title>
            <FilterWrapper>
              <SelectCheckbox />
              <CreateEvent>
                <ButtonName>CRIAR</ButtonName>
                <ButtonName>+</ButtonName>
              </CreateEvent>
            </FilterWrapper>
          </TitleWrapper>
          <CardsWrapper>
            {list.length !== 0 &&
              list.map((element) => (
                <Cards
                  handleRemoveButton={ handleRemoveButton }
                  element={element}
                  key={element.id}
                />
              ))}
          </CardsWrapper>
        </Container>
        <SideContainer>
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
        </SideContainer>
      </ContainerWrapper>
    </Main>
  );
}

const Main = styled.main`
  background: #f2f3f5;
  height: 100vh;
`;

const ContainerWrapper = styled.section`
  display: flex;
`;

const Container = styled.section`
  margin-left: 78px;
  width: 860px;
`;

const TitleWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
`;
const FilterWrapper = styled.section`
  display: flex;
  height: 48px;
`;

const CreateEvent = styled.button`
  align-items: center;
  background-color: #3489b1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 38px;
  justify-content: space-evenly;
  outline: inherit;
  padding: 0;
  width: 103px;
`;

const ButtonName = styled.p`
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  width: auto;
`;

const Title = styled.h3`
  color: #707070;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  height: 48px;
  line-height: 48px;
  padding: ;
  width: 240px;
`;

const CardsWrapper = styled.section``;

const SideContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 31.5px;
`;

const Notification = styled.section`
  background-color: #fff2de;
  border: 1px solid #dcd1c0;
  height: 308px;
  margin-top: 36px;
  width: 278px;
`;

const NotificationTitle = styled.p`
  color: #707070;
  font-family: "Roboto";
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
  font-family: "Roboto";
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
`;

const TitleManagement = styled.p`
  color: #707070;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  height: 19px;
  line-height: 19px;
  width: 191px;
`;

const mapStateToProps = (state) => ({
  showModal: state.eventReducer.showModal,
});

App.propTypes = {
  showModal: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, null)(App);
