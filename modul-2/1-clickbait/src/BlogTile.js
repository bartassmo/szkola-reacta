import React from 'react';

const styles = {
  position: 'relative',
  width: 'calc(25% - 10px)',
  marginLeft: 5,
  marginRight: 5,
  marginBottom: 10,
  img: {
    display: 'block',
    maxWidth: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    minHeight: '33%',
    fontSize: 12,
    color: '#ffffff',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .66)',
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    fontSize: 16,
    margin: 0,
    marginBottom: 7,
  },
  para: {
    margin: 0,
  },
};

function BlogTile({ id, img, title, intro }) {
  return (
    <div key={id} style={styles}>
      <img src={img} alt={title} style={styles.img} />
      <div style={styles.content}>
        <h2 style={styles.header}>{title}</h2>
        <p style={styles.para}>{intro.length > 25 ? `${intro.substring(0, 25)}...` : intro}</p>
      </div>
    </div>
  );
}

export default BlogTile;
