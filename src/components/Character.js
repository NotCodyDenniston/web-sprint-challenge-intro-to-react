// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {

    const StyledDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    `
    const StyledH3 = styled.h3`
    padding:0px 50px;
    border:black 1px solid
    `

return (
    <StyledDiv>
        <h2>{props.name}</h2>
        <StyledH3>{props.height}</StyledH3>
        <StyledH3>{props.mass}</StyledH3>
        <StyledH3>{props.hair_color}</StyledH3>
        <StyledH3>{props.skin_color}</StyledH3>
    </StyledDiv>
)
}

export default Character