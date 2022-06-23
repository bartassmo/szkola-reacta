import React, { useState } from 'react';

import Section from 'components/Section';
import Button from 'components/Button';
import Dialog from 'components/Dialog';
import Snackbar from 'components/Snackbar';

import './App.css';

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const openCloseModal = () => {
    setDialogVisible(!dialogVisible);
  };

  const dialogConfirm = () => {
    console.log('confirm');
  }

  const dialogAbort = () => {
    console.log('abort');
  }

  const openSnackbar = () => {
    setSnackbarVisible(!snackbarVisible);
  };



  return (
    <div className="App">
      <Section sectionTitle="Dialog">
        <Button label="Zobacz modal" onClick={ openCloseModal } />
        { dialogVisible && (
        <Dialog
          title="Modal"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod venenatis elit et tincidunt. Vivamus vel sem scelerisque, molestie lacus sit amet, pellentesque odio. Lorem."
          close={ openCloseModal }
          confirm={ dialogConfirm }
          abort={ dialogAbort }
        />
        )}
      </Section>
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
    </div>
  );
}

export default App;
