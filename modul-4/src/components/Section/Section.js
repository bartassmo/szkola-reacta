import React from "react";

const styles = {
  padding: '2.5rem 0',
  borderBottom: '1px solid #242424',
  display: 'flex',
  justifyContent: 'center',
  container: {
    maxWidth: '50vw',
    width: '100%',
  },
  title: {
    fontSize: 20,
    marginTop: 0,
    marginBottom: 25,
    textAlign: 'center'
  }
}

const Section = ({ sectionTitle, children }) => {
  return (
    <section style={ styles }>
      <div style={ styles.container }>
        <h2 style={ styles.title }>{ sectionTitle }</h2>
        { children }
      </div>
    </section>
  )
}

export default Section;