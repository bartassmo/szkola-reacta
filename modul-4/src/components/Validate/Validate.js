import React, { useRef, useState } from "react";

import Input from "./Input";
import { colors } from "helpers/colors";


const styles = {
  display: 'flex',
  flexDirection: 'column',
  wrapper: {
    display: 'flex',
    width: '100%',
    marginBottom: 2,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    padding: '.5rem 1rem',
    lineHeight: 1,
    resize: 'none'
  },
  button: {
    alignSelf: 'center',
    width: 'fit-content',
    backgroundColor: 'transparent',
    border: `1px solid ${colors.primary}`,
    lineHeight: 1,
    padding: '.5rem 1.5rem',
    transition: 'all .2s ease-in-out',
    marginTop: 10,
    cursor: 'pointer'
  },
  error: {
    display: 'block',
    pointerEvents: 'none',
    fontSize: 12,
    color: `${colors.red}`,
    fontWeight: 500,
    marginBottom: 10
  },
  thanks: {
    marginTop: 25,
    fontSize: 18,
    textAlign: 'center',
    color: `${colors.green}`,
    fontWeight: 500,

  }
}

const validInput = `1px solid ${colors.primary}`;
const invalidInput = `1px solid ${colors.red}`;

const errMsg = {
  nameMsg: "Imię jest wymagane",
  emailMsg: "Email jest wymagany",
  bioMsg: "Bio jest wymagane",
  genderMsg: "Wybór płci jest wymagany",
  agreeMsg: "Wyrażenie zgody jest wymagane"
};

function useInput(initialValue = '') {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (e.target.type === "radio") {
      setValue(e.target.value);
    } else if (e.target.type === "checkbox") {
      setValue(e.target.checked);
    } else {
      setValue(e.target.value);
      e.target.style.border = e.target.value ? validInput : invalidInput;
    }
  }

  return [value, handleChange];
}

const Validate = () => {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [bio, handleBioChange] = useInput('');
  const [gender, handleGenderChange] = useInput('');
  const [agree, handleAgreeChange] = useInput(false);
  const [validFields, setValidFields] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const bioInput = useRef(null);
  const genderWomanInput = useRef(null);
  const genderManInput = useRef(null);
  const agreeInput = useRef(null);

  const form = document.querySelector('form');

  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [bioMsg, setBioMsg] = useState("");
  const [genderMsg, setGenderMsg] = useState("");
  const [agreeMsg, setAgreeMsg] = useState("");

  const resetFields = () => {
    nameInput.current.value = '';
    emailInput.current.value = '';
    bioInput.current.value = '';
    genderManInput.current.checked = false;
    genderWomanInput.current.checked = false;
    agreeInput.current.checked = false;
  }

  const handleSubmit = (e) => {
    setValidFields(true);
    e.preventDefault();
    console.log(`1 stacja - sprawdzam validFields -- ${validFields}`)

    if(!nameInput.current.value) {
      setNameMsg(errMsg.nameMsg);
      nameInput.current.style.border = invalidInput;
      setValidFields(false);
    } else {
      setNameMsg("");
      nameInput.current.style.border = validInput;
    }
    console.log(`2 stacja - sprawdzam validFields -- ${validFields}`)

    if(!emailInput.current.value) {
      setEmailMsg(errMsg.emailMsg);
      emailInput.current.style.border = invalidInput;
      setValidFields(false);
    } else {
      setEmailMsg("");
      emailInput.current.style.border = validInput;
    }

    console.log(`3 stacja - sprawdzam validFields -- ${validFields}`)

    if(!bioInput.current.value) {
      setBioMsg(errMsg.bioMsg);
      bioInput.current.style.border = invalidInput;
      setValidFields(false);
    } else {
      setBioMsg("");
      bioInput.current.style.border = validInput;
    }

    console.log(`4 stacja - sprawdzam validFields -- ${validFields}`)

    if(!genderWomanInput.current.checked && !genderManInput.current.checked) {
      setGenderMsg(errMsg.genderMsg);
      setValidFields(false);
    } else {
      setGenderMsg("");
    }
    console.log(`5 stacja - sprawdzam validFields -- ${validFields}`)

    if(!agreeInput.current.checked) {
      setAgreeMsg(errMsg.agreeMsg);
      setValidFields(false);
    } else {
      setAgreeMsg("");
    }

    console.log(`6 stacja - sprawdzam validFields -- ${validFields}`)

    if(validFields) {
      // e.target.submit();
      setValidFields(true);
      resetFields();
      setIsFormSent(true);
    }
  };

  const thankYou = () => {
    return (
      <div style={ styles.thanks } >Dzięki za wysłanie wiadomości!</div>
    )
  }
  

  return (
    <>
    <form style={ styles } onSubmit={ handleSubmit }>
      <Input
        type="text"
        label="Imię"
        id="name"
        errorMessage="Podaj poprawne imię"
        placeholder="Imię"
        innerRef={nameInput}
        value={name}
        onChange={handleNameChange}
      />
      <span style={ styles.error }>{nameMsg}</span>
      <Input
        type="email"
        label="Adres email"
        id="email"
        errorMessage="Podaj poprawny adres email"
        placeholder="Adres email"
        innerRef={emailInput}
        value={email}
        onChange={handleEmailChange}
      />
      <span style={ styles.error }>{emailMsg}</span>
      <Input
        type="textarea"
        label="Bio"
        id="bio"
        errorMessage="Podaj poprawny opis"
        placeholder="Bio"
        rows="2"
        innerRef={bioInput}
        value={bio}
        onChange={handleBioChange}
      />
      <span style={ styles.error }>{bioMsg}</span>
      <span style={ styles.label }>Płeć</span>
      <div style={ styles.wrapper }>
        <Input
          type="radio"
          label="Kobieta"
          id="woman"
          value="woman"
          checked={gender === 'woman'}
          innerRef={genderWomanInput}
          name={genderWomanInput}
          onChange={handleGenderChange}
        />
        <Input
          type="radio"
          label="Mężczyzna"
          id="man"
          value="man"
          checked={gender === 'man'}
          innerRef={genderManInput}
          name={genderManInput}
          onChange={handleGenderChange}
        />
      </div>
      <span style={ styles.error }>{genderMsg}</span>
      <div style={ styles.wrapper }>
        <Input
          type="checkbox"
          label="Akceptuję regulamin"
          id="agree"
          name="agree"
          errorMessage="Zaakceptuj regulamin"
          checked={agree}
          innerRef={agreeInput}
          onChange={handleAgreeChange}
        />
      </div>
      <span style={ styles.error }>{agreeMsg}</span>
      <button type="submit" style={ styles.button }>Wyślij</button>
    </form>
    { isFormSent && thankYou() }
    {/* <div style={ styles.thanks }>Pole jest: { validFields }</div>
    <div style={ styles.thanks }>Dziękujemy za wysłanie wiadomości!</div> */}
    </>
  )
}

export default Validate;