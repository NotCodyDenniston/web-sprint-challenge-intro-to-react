// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {

    const StyledDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    
    `
    const StyledH3 = styled.h3`
    padding:0px 50px;
    border:black 1px solid;
    background-color: black;
    color: ghostWhite;
    width: 75px;
    `
    const StyledH2 = styled.h2`
    padding:0px 50px;
    color: Teal;
    width:100px;
    `

return (
    <StyledDiv>
        <StyledH2>{props.name}</StyledH2>
        <StyledH3>{props.height}</StyledH3>
        <StyledH3>{props.mass}</StyledH3>
        <StyledH3>{props.hair_color}</StyledH3>
        <StyledH3>{props.skin_color}</StyledH3>
    </StyledDiv>
)
}

export default Character