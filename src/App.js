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
      </ContainerWrapper>
    </Main>
  );
}

const Main = styled.main`
  background: #F2F3F5;
  height: 100vh;
`

const ContainerWrapper = styled.section`

`

const Container = styled.section`
  margin-left: 78px;
  width: 860px;
`

const TitleWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`
const FilterWrapper = styled.section`
  align-items: center;
  display: flex;
`

const Filter = styled.select`
  background-color: white;
  border: 1px solid #B4B4B4;
  border-radius: 5px;
  height: 38px;
  margin: 10px;
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

export default App;
