import Section from "components/Section"
import Registration from "components/Registration";
import StepsForm from "components/StepsForm";

const Main = () => {
  return (
    <>
      <Section sectionTitle="Rejestracja konta użytkownika">
        <Registration />
      </Section>
      <Section sectionTitle="Formularz krokowy">
        <StepsForm />
      </Section>
    </>
  )
}

export default Main;