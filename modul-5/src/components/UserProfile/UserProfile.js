import React from "react";
import Section from "components/Section";
import User from "components/User";

const UserProfile = ({user}) => {
  return (
    <Section sectionTitle="User profile">
      <User user={user} />
    </Section>
  )
}

export default UserProfile;