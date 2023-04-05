import React from "react";
import styled from "styled-components";
import Button1 from "./button/Button";

const GetInTouchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GetInTouchHeading = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 61px;
  text-align: center;
  color: #000000;
  margin: 0;
  padding: 0;
`;

const GetInTouchConnectWithUsButton = styled.div``;

export default function HomeGetInTouch() {
  return (
    <GetInTouchContainer className="flex-1 justify-center mb-[5rem]">
      <GetInTouchHeading>
        Get in touch with us to start your custom furniture project today.
      </GetInTouchHeading>
      <GetInTouchConnectWithUsButton className="text-center">
        <Button1
          width={"12.5rem"}
          height={"2.6875rem"}
          bgColor={"#733E1D"}
          color={"#FFF"}
          fontSize={"1.25rem"}
          fontWeight={"700"}
          label={"Connect With Us"}
        />
      </GetInTouchConnectWithUsButton>
    </GetInTouchContainer>
  );
}
