import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setModal } from '../redux/action';

function Modal(props) {
  const { detailsPerson, setModal } = props;

  const handleModal = () => {
    setModal();
  }

  return (
    <Main>
      <Title>Convidados</Title>
      {
        detailsPerson.length !== 0 && detailsPerson.map((element, index) => (
          <CardWrapper key={index}>
            <ImagePerson src={ element.avatar } alt={ element.name } />
            <About>
              <Name>{ element.name }</Name>
              <Username>{ element.username }</Username>
              <Confirmation
                confirm={ element.confirmed_presence }
              >
                Confirmado: { element.confirmed_presence.toString().toUpperCase() }
              </Confirmation>
            </About>
          </CardWrapper>
        ))
      }
      <Button onClick={ handleModal }>Back</Button>
    </Main>
  );
}

const Main = styled.section`
  align-items: center;
  background-color: #F2F3F5;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 10px;
  position: absolute;
  width: auto;
`

const Title = styled.h1`
  color: #707070;
  font-family: "Roboto";
  font-style: normal;
  height: 19px;
  line-height: 19px;
  width: auto;
`

const CardWrapper = styled.section`
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  margin: 10px 15px 0 15px;
  padding: 10px;
  width: 300px;
`

const ImagePerson = styled.img`
  height: 100px;
  width: 100px;
`

const About = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

const Name = styled.p`
  color: #707070;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
`

const Username = styled.p`
  color: #707070;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
`

const Confirmation = styled.p`
  color: #707070;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
`

const Button = styled.button`
  background: rgb(128,128,128);
  border: 1px solid lightgray;
  box-shadow: 2px 2px 5px rgba(50, 50, 50, 0.3);
  color: white;
  cursor: pointer;
  font-weight: 600;
  height: 50px;
  margin: 20px 0;
  padding: 0;
  outline: inherit;
  width: 100px;

  &:active {
    background: rgb(150,150,150);
    box-shadow: 0px 0px 0px rgba(50, 50, 50, 0.3);
  }
`

const mapDispatchToProps = (dispatch) => ({
  setModal: () => dispatch(setModal())
});

const mapStateToProps = (state) => ({
  detailsPerson: state.eventReducer.detailsPerson,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
