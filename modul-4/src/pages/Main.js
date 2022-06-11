import React from "react";

import Section from "components/Section";
import RestaurantForm from "components/RestaurantForm";
import Validate from "components/Validate";

const Main = () => {
  return (
    <>
      <Section>
        <RestaurantForm />
      </Section>
      <Section>
        <Validate />
      </Section>
    </>
  )
}

export default Main;