import React, { useState } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import web from "../images/web.svg";
import more from "../images/more.svg";

function DemoCards(props) {
  const { element, setBoards, boards } = props;
  const [removeDemo, setRemoveDemo] = useState(false);
  
  const handleDemoRemoveButton = () => {
    setRemoveDemo(!removeDemo);
  }

  const handleFilterDemo = ({ target }) => {
    const newBoard = boards.filter((element) => element.title !== target.name);
    setBoards(newBoard);
    setRemoveDemo(!removeDemo);
  }
  
  return (
    <Demonstrative>
      <DemonstrativeTitleWrapper>
        <DemonstrativeTitle>{element.title}</DemonstrativeTitle>
        <IconWrapper>
          <Icon src={ web } alt="web icon" />
          {
            removeDemo
              ? <DemoRemoveButton
                  onClick={ handleFilterDemo }
                  name={ element.title }
                >
                  X
                </DemoRemoveButton>
              : <DemoRemoveButton
                  onClick={ handleDemoRemoveButton }
                >
                  <Icon
                    src={more}
                    alt="more icon"
                  />
                </DemoRemoveButton>
          }
        </IconWrapper>
      </DemonstrativeTitleWrapper>
      {
        element.resume_files.map((item, ind) => (
          <DemonstrativeImage
            key={ind}
            src={item.file}
            alt={element.title}
          />
        ))
      }
    </Demonstrative>
  );
}

const Demonstrative = styled.div`
  margin-top: 10px;
  background-color: rgba(52, 137, 177, 0.1);
`;

const DemonstrativeTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2px 2px 0px 2px;
`;

const DemonstrativeTitle = styled.p`
  color: #707070;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  height: 15px;
  line-height: 15px;
  width: auto;
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const DemonstrativeImage = styled.img`
  height: 60px;
  padding: 2.5px;
  width: 60px;
`;

const DemoRemoveButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  height: 16px;
  justify-content: center;
  padding: 0;
  outline: inherit;
  text-align: center;
  width: 16px;
`

DemoCards.propTypes = {
  setBoards: PropTypes.func,
  boards: PropTypes.arrayOf(PropTypes.object),
  element: PropTypes.instanceOf(PropTypes.object),
}.isRequired;

export default DemoCards;
