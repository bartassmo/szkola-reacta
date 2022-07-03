import Section from "components/Section"
import Registration from "components/Registration";
import StepsForm from "components/StepsForm";
import Recaptcha from "components/Recaptcha";

const Main = () => {
  return (
    <>
      <Section sectionTitle="Rejestracja konta użytkownika">
        <Registration />
      </Section>
      <Section sectionTitle="Formularz krokowy">
        <StepsForm />
      </Section>
      <Section sectionTitle="Formularz ReCaptcha">
        <Recaptcha />
      </Section>
    </>
  )
}

export default Main;