import React from "react";

const styles = {
  padding: '2.5rem 0',
  borderBottom: '1px solid #242424',
  display: 'flex',
  justifyContent: 'center',
  container: {
    maxWidth: '50vw',
    width: '100%',
  }
}

const Section = ({ children }) => {
  return (
    <section style={ styles }>
      <div style={ styles.container }>
        { children }
      </div>
    </section>
  )
}

export default Section;