import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {

  const getDefaultPeople = () => {
    return {
      list: [
        {
          name: "홍길동",
          company: "삼성",
          color: "yellow",
          job: "프로그래머",
          message: "새해복 많이 받으세요",
          picture: "images/default_logo.png"
        },
        {
          name: "김구라",
          company: "MBC",
          color: "yellow",
          job: "개그맨",
          message: "새해복 많이 받지마세요",
          picture: "images/default_logo.png"
        },
        {
          name: "김연아",
          company: "없음",
          color: "yellow",
          job: "백수",
          message: "올해도 화이팅",
          picture: "images/default_logo.png"
        }
      ]
    }
  }

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  const [peoples, setPeoples] = useState(getDefaultPeople());

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    });
  })

  return (
    <section className={styles.maker} >
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor peoples={peoples} />
        <Preview />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;
