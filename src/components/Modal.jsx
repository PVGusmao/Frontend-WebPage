import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function Modal(props) {
  const { detailsPerson, showModal } = props;

  return (
    <Main>
      {
        detailsPerson.length && detailsPerson.map((element) => (
          <CardWrapper key={element.id}>
            <ImagePerson src={ element.avatar } alt={ element.name } />
            <About>
              <Name>{ element.name }</Name>
              <Username>{ element.username }</Username>
              <Confirmation confirm={ element.confirmed_presence }> Confirmado: { element.confirmed_presence.toString().toUpperCase() }</Confirmation>
            </About>
          </CardWrapper>
        ))
      }
      <Button>Back</Button>
    </Main>
  );
}

const Main = styled.section`
  background-color: #F2F3F5;
  border-radius: 5px;
  height: auto;
  padding: 10px;
  position: absolute;
  width: auto;
`

const CardWrapper = styled.section`
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  margin: 10px 15px 0 15px;
  padding: 10px;
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

`

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
  showModal: state.eventReducer.showModal,
  detailsPerson: state.eventReducer.detailsPerson,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);;
