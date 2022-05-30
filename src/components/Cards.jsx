import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import more from "../images/more.svg";
import { getPersonsInfo } from "../redux/action";

function Cards(props) {
  const {
    showModal,
    element,
    element: {
      title,
      type,
      description,
      info: { date, place },
      file: { url },
      invited_people,
    },
  } = props;

  const handleModal = () => {
    const { getPersonsInfo } = props;
    getPersonsInfo(element.invited_people);
  }

  return (
    <IndividualCard>
      <Wrapper>
        <Image src={url} alt={title} />
        <Details>
          <Title>{title}</Title>
          <About>
            <Type type={type}>{type.toUpperCase()}</Type>
            <Date>{date && date.toUpperCase()}</Date>
            <Place>{place && `| ${place.toUpperCase()} |`}</Place>
            <InvitedPeople disabled={ showModal } onClick={ handleModal }>
              {invited_people &&
                `${
                  invited_people.filter((people) => people.confirmed_presence)
                    .length
                } CONFIRMAÇÕES DE
                  ${invited_people.length}`}
            </InvitedPeople>
          </About>
          <Description>{description}</Description>
        </Details>
      </Wrapper>
      <More>
        <MoreImage src={more} />
      </More>
    </IndividualCard>
  );
}

const IndividualCard = styled.div`
  align-items: center;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 10px;
  width: auto;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 73px;
  width: 73px;
`;

const Details = styled.section`
  padding-left: 16px;
  padding-top: 8px;
`;

const Title = styled.p`
  color: #707070;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  height: 19px;
  line-height: 19px;
  width: auto;
`;

const About = styled.div`
  align-items: center;
  display: flex;
`;

const Type = styled.p`
  font-weight: 700;
  font-size: 8px;
  margin: 4px 0px;
  padding: 2px 0px;
  text-align: center;

  ${(props) => {
    switch (props.type) {
      case "event":
        return css`
          background-color: #ee8686;
          color: #333333;
          width: 36px;
        `;
      case "release":
        return css`
          background-color: #3489b1;
          color: #ffffff;
          width: 48px;
        `;
      default:
        return css`
          background-color: #707070;
          color: #ffffff;
          width: 66px;
        `;
    }
  }}
`;

const Date = styled.p`
  color: #707070;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  height: 12px;
  margin-left: 5px;
  width: auto;
`;

const Place = styled.p`
  color: #707070;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  height: 12px;
  margin-left: 5px;
  width: auto;
`;

const InvitedPeople = styled.button`
  background: none;
  color: inherit;
  border: none;
  border-bottom: 1px solid #3489b1;
  color: #3489b1;
  cursor: pointer;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  height: 12px;
  margin-left: 5px;
  padding: 0px 0px 15px 0px;
  width: auto;
  outline: inherit;
`;

const Description = styled.p`
  color: #707070;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
`;

const More = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  height: 24px;
  padding: 0;
  outline: inherit;
  width: 24px;
`;

const MoreImage = styled.img`
  heigth: 24px;
  width: 24px;
`;

Cards.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  url: PropTypes.string,
  invited_people: PropTypes.arrayOf(PropTypes.object),
  element: PropTypes.instanceOf(PropTypes.object),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getPersonsInfo: (info) => dispatch(getPersonsInfo(info)),
});

const mapStateToProps = (state) => ({
  showModal: state.eventReducer.showModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
