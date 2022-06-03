import React from "react";

import { colors } from "components/Form/colors";

const styles = {
  padding: '2.5rem 0',
  borderBottom: `1px solid ${colors['imperial']}`,
  display: 'flex',
  justifyContent: 'center',
  container: {
    maxWidth: '50vw',
    width: '100%',
  }
}

function Section({ children }) {
  return (
    <section style={ styles }>
      <div style={ styles.container }>
        { children }
      </div>
    </section>
  )
}

export default Section;