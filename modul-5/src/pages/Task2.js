import React, { useState } from "react";

import Section from 'components/Section';
import Button from 'components/Button';
import Snackbar from 'components/Snackbar';

const Task2 = () => {

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const openSnackbar = () => {
    setSnackbarVisible(!snackbarVisible);
  };

  return (
    <Section sectionTitle="Snackbar">
      <Button label="Zobacz snackbar" disabled={snackbarVisible} onClick={ openSnackbar } />
      { snackbarVisible && (
        <Snackbar
          text="Ładny mi wyszedł, prawda?"
          close={ openSnackbar }
          positionX="left"
          positionY="top"
          timeout="1500"
          type="info"
          setVisible={setSnackbarVisible}
        />
      )}
    </Section>
  )
}

export default Task2;