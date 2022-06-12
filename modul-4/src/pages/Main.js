import React from "react";

import Section from "components/Section";
import RestaurantForm from "components/RestaurantForm";
import Validate from "components/Validate";
import ReactForm from "components/ReactForm";

const Main = () => {
  return (
    <>
      <Section sectionTitle={"Rachunek w restauracji"}>
        <RestaurantForm />
      </Section>
      <Section sectionTitle={"Formularz kontaktowy"}>
        <Validate />
      </Section>
      <Section sectionTitle={"React Hook Form"}>
        <ReactForm />
      </Section>
    </>
  )
}

export default Main;