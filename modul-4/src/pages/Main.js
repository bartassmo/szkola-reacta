import React, { useEffect, useRef } from "react";

import { colors } from "helpers/colors";

import Section from "components/Section";
import RestaurantForm from "components/RestaurantForm";
import Validate from "components/Validate";
import ReactForm from "components/ReactForm";
import Calculator from "components/Calculator";
import Button from "components/Button";

const Main = () => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.style.background = colors.red;
    btnRef.current.style.borderColor = colors.red;
    btnRef.current.style.color = colors.secondary;
  }, []);

  const mouseHover = () => {
    btnRef.current.style.background = colors.blue;
    btnRef.current.style.borderColor = colors.blue;
    btnRef.current.style.color = colors.primary;
  }

  const mouseLeave = () => {
    btnRef.current.style.background = colors.red;
    btnRef.current.style.borderColor = colors.red;
    btnRef.current.style.color = colors.secondary;
  }
  return (
    <>
      {/* <Section sectionTitle="Rachunek w restauracji">
        <RestaurantForm />
      </Section>
      <Section sectionTitle="Formularz kontaktowy">
        <Validate />
      </Section>
      <Section sectionTitle="React Hook Form">
        <ReactForm />
      </Section>
      <Section sectionTitle="Domowe finanse">
        <Calculator />
      </Section> */}
      <Section sectionTitle="Button - zmiana koloru">
        <Button ref={ btnRef } mouseOver={ mouseHover } mouseLeave={ mouseLeave } />
      </Section>
    </>
  )
}

export default Main;