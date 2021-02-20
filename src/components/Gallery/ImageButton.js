import React from "react";
import styled from "styled-components";

const BUTTON_SIZE = 50;

const StyledButton = styled.button`
  /* max-height: ${BUTTON_SIZE}px; */
  /* max-width: ${BUTTON_SIZE}px; */
  height: ${BUTTON_SIZE}px;
  width: auto;
  padding: 0;
  overflow: hidden;
  margin: 0 10px 10px 0;
  border: none;
  outline: 0;
`;

const StyledImage = styled.img`
  /* width: 100%; */
  height: 100%;
`;

const ImageButton = ({ src, altText, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      <StyledImage src={src} alt={altText} />
    </StyledButton>
  );
};

export default ImageButton;
