import Section from "components/Section";
import PassphraseForm from "components/PassphraseForm";

function LoginPage() {
  return (
    <Section sectionTitle="Tajna treść. Podaj hasło.">
      <PassphraseForm />
    </Section>
  )
}

export default LoginPage;