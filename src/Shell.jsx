import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: ${ (props) => props.co};
  padding: 5px;
  border-bottom: 3px solid #999;

  &:hover {
    color: #000;
  }
`;



const Shell = () => {
    return (
    <div>
        <Title co="#999">Hello Styled</Title>
        <Title co="#f12">Hello Styled</Title>
        <Title co="#bb2">Hello Styled</Title>
        <Title co="#e713">Hello Styled</Title>
    </div>
    );
};

export default Shell