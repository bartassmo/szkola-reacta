import React from 'react';

import { Button, Input, Textarea } from './';

const styles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'stretch',
  width: '100%'
}

function Form() {
  return (
    <div style={ styles }>
      <Input borderSize='1px' borderRadius='1px' />
      <Textarea borderSize='1px' borderRadius='1px' />
      <Button bgColor='light' color='imperial' icon='user'>Send</Button>
    </div>
  )
}

export default Form;