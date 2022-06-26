import React from "react";

import Section from "components/Section";
import UsersContainer from "components/UsersContainer";

const Task4 = ({ saveUser }) => {
  return (
    <Section sectionTitle="Users">
      <UsersContainer saveUser={ saveUser } />
    </Section>
  )
}

export default Task4;