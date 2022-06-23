import React, { useCallback, useState } from 'react';

import Section from 'components/Section';
import Button from 'components/Button';
import Dialog from 'components/Dialog';

import './App.css';

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const openCloseModal = (e) => {
    setDialogVisible(!dialogVisible);
  };

  const dialogConfirm = () => {
    console.log('confirm');
  }

  const dialogAbort = () => {
    console.log('abort');
  }

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
    </div>
  );
}

export default App;
