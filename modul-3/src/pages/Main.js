import React from 'react';

import Section from 'components/Section';
import Form from 'components/Form';
import Card from 'components/Card';

const Main = () => {
  return (
    <>
      <Section>
        <Form />
      </Section>
      <Section>
        <Card
          author="Robert"
          title="Niesamowite jedzenie"
          date="September 14, 2016"
          img="https://picsum.photos/400/300"
          excerpt="To jest skrócony tekst"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Section>
    </>
  )
}

export default Main;