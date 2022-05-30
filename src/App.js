import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import data from './frontend-test/data.json';
import styled from 'styled-components';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([data]);
  }, [])

  return (
    <Main>
      <Header />
      <ContainerWrapper>
        <Container>
          <TitleWrapper>
            <Title>Endomarketing</Title>
            <FilterWrapper>
              <Filter>
                <Option>Evento</Option>
                <Option>Publicação</Option>
                <Option>Comunicado</Option>
              </Filter>
              <CreateEvent>
                <Paragraph>CRIAR</Paragraph>
                <Paragraph>+</Paragraph>          
              </CreateEvent>
            </FilterWrapper>
          </TitleWrapper>
          <CardsWrapper>
            {
              list.length !== 0 && list[0].data.map((element) => (
                <Cards element={ element } key={ element.id } />
              ))
            }
          </CardsWrapper>
        </Container>
        <Notification>
          <NotificationTitle>Endomarketing</NotificationTitle>
          <NotificationText>
            Endomarketing está relacionado às
            ações de treinamento ou qualificação
            dos colaboradores da empresa
            visando um melhor serviço para o
            cliente. Marketing interno, devido ao
            nome, é usualmente confundido com
            Endomarketing mesmo sendo
            conceitos diferentes.
          </NotificationText>
          <Dispatch>DISPENSAR</Dispatch>
        </Notification>
      </ContainerWrapper>
    </Main>
  );
}

const Main = styled.main`
  background: #F2F3F5;
  height: 100%;
`

const ContainerWrapper = styled.section`
  display: flex;
`

const Container = styled.section`
  margin-left: 78px;
  width: 860px;
`

const TitleWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
`
const FilterWrapper = styled.section`
  display: flex;
  height: 48px;
`

const Filter = styled.select`
  background-color: white;
  border: 1px solid #B4B4B4;
  border-radius: 5px;
  height: 38px;
  margin: 0px 10px;
  width: 103px;
`

const Option = styled.option`

`

const CreateEvent = styled.button`
  align-items: center;
  background-color: #3489B1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font: inherit;
  height: 38px;
  justify-content: space-evenly;
  outline: inherit;
  padding: 0;
  width: 103px;
`

const Paragraph = styled.p`
  color: #FFFFFF;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  width: auto;
`

const Title = styled.h3`
  color: #707070;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  height: 48px;
  line-height: 48px;
  padding: ;
  width: 240px;
`

const CardsWrapper = styled.section`

`

const Notification = styled.section`
  background-color: #FFF2DE;
  border: 1px solid #DCD1C0;
  height: 308px;
  margin-top: 36px;
  margin-left: 31.5px;
  width: 278px;
`

const NotificationTitle = styled.p`
  color: #707070;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  height: 19px;
  line-height: 19px;
  margin: 29px 143px 12px 21px;
  width: 115px;
`

const NotificationText = styled.p`
  color: #707070;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  height: 152px;
  line-height: 19px;
  margin: 0px 21px 20px 21px;
  width: 236px;
`

const Dispatch = styled.button`
  background: none;
  border: none;
  border: 1px solid #707070;
  border-radius: 5px;
  color: #707070;
	cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  height: 37px;
  line-height: 15px;
  margin: 0px 145px 30px 21px;
	outline: inherit;
	padding: 0;
  width: 112px;
`

export default App;
