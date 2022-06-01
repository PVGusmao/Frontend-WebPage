import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Cards from './Cards';
import SelectCheckbox from './SelectCheckbox';

function ContainerEvents(props) {
  const { filterType, list, setList } = props;

  const handleRemoveButton = ({ target }) => {
    const newList = list.filter((element) => element.id !== +target.id);
    setList(newList);
  }
  return (
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
            {
              filterType.event || filterType.release || filterType.publication
                ? list.length !== 0 &&
                list.filter((type) => (
                  filterType.event && type.type === 'event')
                  || (filterType.release && type.type === 'release')
                  || (filterType.publication && type.type === 'publication'))
                  .map((element) => (
                  <Cards
                    handleRemoveButton={ handleRemoveButton }
                    element={element}
                    key={element.id}
                  />
                ))
                : list.map((element) => (
                  <Cards
                    handleRemoveButton={ handleRemoveButton }
                    element={element}
                    key={element.id}
                  />
                ))
            }
          </CardsWrapper>
        </Container>
  );
}

const Container = styled.section`
  margin-left: 78px;
  width: auto;

  @media (max-width: 1300px) {
    margin-left: 20px;
  }

  @media (max-width: 1100px) {
    margin-left: 20px;
    width: 100%;
  }

  @media (max-width: 615px) {
    margin-top: 25px;
  }
`;

const TitleWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  width: 100%;

  @media (max-width: 1100px) {
    margin-right: 20px;
    width: 95%;
  }

  @media (max-width: 615px) {
    flex-direction: column; 
  }
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
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  width: auto;
`;

const Title = styled.h3`
  color: #707070;
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  height: 48px;
  line-height: 48px;
  padding: ;
  width: 240px;
`;

const CardsWrapper = styled.section`
  width: 100%;
`;

const mapStateToProps = (state) => ({
  filterType: state.filterReducer,
});

ContainerEvents.propTypes = {
  showModal: PropTypes.bool,
  filterType: PropTypes.instanceOf(PropTypes.object),
  list: PropTypes.instanceOf(PropTypes.object),
  setList: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, null)(ContainerEvents);
