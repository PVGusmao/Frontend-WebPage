import React from 'react';
import styled, { css } from 'styled-components';

function Cards(props) {
  const { element: {title, type, description,
    info: { date, place }, file: { url }, invitedPeople } } = props;
  return (
    <IndividualCard>
      <Image src={ url } alt={ title } />
      <Details>
        <Title>
          { title }
        </Title>
        <About>
          <Type type={ type }>
            { type.toUpperCase() }
          </Type>
          <Date>
            {
              date && date.toUpperCase()
            }
          </Date>
          <Place>
            {
              place && `| ${place.toUpperCase()} |`
            }
          </Place>
          <InvitedPeople>
            {
              place && `${place.toUpperCase()}`
            }
          </InvitedPeople>
        </About>
      </Details>
    </IndividualCard>
  );
}

const IndividualCard = styled.div`
  display: flex;
  margin: 28px;
  width: auto;
`

const Image = styled.img`
  height: 73px;
  width: 73px;
`

const Details = styled.section`
  padding-left: 16px;
  padding-top: 8px;
`

const Title = styled.p`
  color: #707070;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  height: 19px;
  line-height: 19px;
  width: auto;
`

const About = styled.div`
  align-items: center;
  display: flex;
`

const Type = styled.p`
  font-weight: 700;
  font-size: 10px;
  margin: 4px 0px;
  padding: 2px 0px;
  text-align: center;

${(props) => {
  switch (props.type) {
    case "event":
      return css`
        background-color: #EE8686;
        color: #333333;
        width: 42px;
      `;
      case "release":
        return css`
        background-color: #3489B1;
        color: #ffffff;
        width: 55px;
      `;  
    default:
      return css`
        background-color: #707070;
        color: #ffffff;
        width: 77px;
      `;
  }
}}
`

const Date = styled.p`
  color: #707070;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 12px;
  height: 12px;
  margin-left: 5px;
  width: auto;
`

const Place = styled.p`
  color: #707070;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 12px;
  height: 12px;
  margin-left: 5px;
  width: auto;
`

const InvitedPeople = styled.p`
  border-bottom: 1px solid #3489B1;
  color: #3489B1;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 12px;
  height: 12px;
  margin-left: 5px;
  padding: 0px 0px 15px 0px;
  width: auto;
`

export default Cards;
