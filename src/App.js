import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import ContainerEvents from "./components/ContainerEvents";
import SideContainer from "./components/SideContainer";
import Modal from "./components/Modal";
import data from "./frontend-test/data.json";
import { connect } from "react-redux";
import management from "./frontend-test/management.json";
import styled from "styled-components";

function App(props) {
  const { showModal } = props;
  const [list, setList] = useState([]);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setList(data.data);
    setBoards(management.data[0].boards);
  }, []);

  return (
    <Main>
      {
        showModal && (
          <ShadowBehindModal>
            <Modal />
          </ShadowBehindModal>
        )
      }
      <Header />
      <ContainerWrapper>
        <ContainerEvents list={list} setList={setList} />
        <SideContainer setBoards={setBoards} boards={boards} />
      </ContainerWrapper>
    </Main>
  );
}

const Main = styled.main`
  background: #f2f3f5;
  height: auto;
  width: 100%;
`;

const ContainerWrapper = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: center;

  @media (mas-width: 1300px) {
    margin-right: 20px;
  }

  @media (max-width: 1100px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ShadowBehindModal = styled.div`
  align-items: center;
  background-color: rgba(50, 50, 50, 0.2);
  display: flex;
  height: 106%;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media (max-width: 1100px) {
    z-index: 2;
  }

  @media (max-width: 615px) {
    margin-top: 35px;
    z-index: 2;
  }
`;

const mapStateToProps = (state) => ({
  showModal: state.eventReducer.showModal,
  filterType: state.filterReducer,
});

App.propTypes = {
  showModal: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, null)(App);
