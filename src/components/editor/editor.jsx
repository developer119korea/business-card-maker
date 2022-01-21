import React from 'react';
import Card from './card';
import styles from './editor.module.css';

const Editor = (props) => {
  const { peoples } = props;
  console.log(peoples);

  return (
    < section className={styles.editor} >
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        {peoples.list.map((people, i) => (
          <Card key={i} people={people} />
        ))}
      </ul>
    </section >
  );
}

export default Editor;