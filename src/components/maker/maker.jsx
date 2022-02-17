import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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

  const addCard = card => {
    setCards([...cards, card]);
  };

  const editCard = card => {
    let newCards = cards.filter(item => item.id !== card.id);
    newCards = [...newCards, card];
    newCards = newCards.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    })
    setCards(newCards);
  }

  const deleteCard = id => {
    const newCards = cards.filter(item => item.id !== id);
    setCards(newCards);
  }

  return (
    <section className={styles.maker} >
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onAddCard={addCard} onEditCard={editCard} onDeleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;
