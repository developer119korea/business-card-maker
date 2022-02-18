import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    '1': {
      id: 1,
      name: '홍길동',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: '홍길동@korea.com',
      message: '내돈내산',
      fileName: "얍",
      fileURL: null
    },
    '2': {
      id: 2,
      name: '김철수',
      company: 'LG',
      theme: 'light',
      title: 'Software Engineer',
      email: '홍길동@korea.com',
      message: '내돈내산',
      fileName: "얍",
      fileURL: null
    },
    '3': {
      id: 3,
      name: '박영희',
      company: '현대',
      theme: 'colorful',
      title: 'Software Engineer',
      email: '홍길동@korea.com',
      message: '내돈내산',
      fileName: "얍",
      fileURL: "fjkdls"
    }
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    });
  })

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker} >
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;
