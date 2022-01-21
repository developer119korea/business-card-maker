import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  const { people } = props;

  return (
    <section className={styles.container}>
      <h1>{people.name}</h1>
      <h1>{people.company}</h1>
      <h1>{people.color}</h1>
      <h1>{people.job}</h1>
      <h1>{people.message}</h1>
      <button>Delete</button>
    </section>
  )
}

export default Card;