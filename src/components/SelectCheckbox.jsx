import React, { useState } from "react";
import styled from "styled-components";

function SelectCheckbox() {
  const [expanded, setExpanded] = useState(false);

  const showCheckboxes = () => {
    let checkboxes = document.querySelector(".checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      setExpanded(!expanded);
    } else {
      checkboxes.style.display = "none";
      setExpanded(!expanded);
    }
  };

  return (
    <>
      <MultiSelect>
        <SelectBox onClick={showCheckboxes}>
          <Filter>
            <option>TIPO</option>
          </Filter>
          <OverSelect></OverSelect>
        </SelectBox>
        <CheckboxWrapper expanded={expanded} className="checkboxes">
          <Label htmlFor="event">
            EVENT
            <InputCheckbox type="checkbox" id="event" />
          </Label>
          <Label htmlFor="release">
            RELEASE
            <InputCheckbox type="checkbox" id="release" />
          </Label>
          <Label htmlFor="publication">
            PUBLICATION
            <InputCheckbox type="checkbox" id="publication" />
          </Label>
        </CheckboxWrapper>
      </MultiSelect>
    </>
  );
}

const MultiSelect = styled.div`
  padding: 0px 10px 0px 0px;
  width: 150px;
`;

const SelectBox = styled.div`
  position: relative;
`;

const Filter = styled.select`
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  height: 38px;
  width: 100%;
`;

const OverSelect = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const CheckboxWrapper = styled.div`
  background-color: white;
  border: 1px solid #dadada;
  display: none;
`;

const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  justify-content: space-between;
  padding: 2px 10px 2px 5px;
  width: auto;
`;

const InputCheckbox = styled.input`
  background-color: #1e90ff;
  cursor: pointer;
`;

export default SelectCheckbox;
