import React from "react";
import styled from "styled-components";

const Button2 = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.fontWeight};
`;

export default function Button1({
  width,
  height,
  bgColor,
  color,
  label,
  fontSize,
  fontWeight,
}) {
  return (
    <Button2
      width={width}
      height={height}
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className="text-center"
    >
      {label}
    </Button2>
  );
}
