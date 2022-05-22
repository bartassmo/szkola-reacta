import React from 'react';
import BlogTile from './BlogTile.js';

const styles = {
  backgroundColor: '#ecf0f1',
  padding: 10,
  display: 'flex',
  flexWrap: 'wrap',
};

const data = [
  {
    id: 1,
    title: 'Pilne: Co to był za dzień!',
    intro: 'Tego świat jeszcze nie widział',
    img: 'https://picsum.photos/350/250',
  },
  {
    id: 2,
    title: 'Wszyscy zazdroszą Polakom!',
    intro: 'Clickbajtowy tytuł',
    img: 'https://picsum.photos/350/250',
  },
  {
    id: 3,
    title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
    img: 'https://picsum.photos/350/250',
  },
  {
    id: 4,
    title: 'Pilne: Polakom będzie żyło się lepiej!',
    intro: 'To jasne! Polacy odkryli ten niesamowity sposób na wspaniałe życie! [ZOBACZ JAK]',
    img: 'https://picsum.photos/350/250',
  },
];

function App() {
  return (
    <div style={styles}>
      {data.map((el) => (
        <BlogTile key={el.id} img={el.img} title={el.title} intro={el.intro} />
      ))}
    </div>
  );
}

export default App;
