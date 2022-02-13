import React, { useState } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAddCard }) => {
  const nameRef = React.createRef();
  const companyRef = React.createRef();
  const titleRef = React.createRef();
  const emailRef = React.createRef();
  const messageRef = React.createRef();
  const themeRef = React.createRef();
  const fileURLRef = React.createRef();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState('light');
  const [fileURL, setFileURL] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      name: name,
      company: company,
      title: title,
      email: email,
      message: message,
      theme: theme,
      fileURL: fileURL
    }
    onAddCard(card);

    nameRef.current.value = '';
    companyRef.current.value = '';
    titleRef.current.value = '';
    messageRef.current.value = '';
    themeRef.current.value = 'light';
    fileURLRef.current.value = '';
  };

  const onChangeName = (e) => {
    const name = nameRef.current.value;
    setName(name);
  }

  const onChangeCompany = (e) => {
    const company = companyRef.current.value;
    setCompany(company);
  }

  const onChangeTheme = (e) => {
    const theme = themeRef.current.value;
    setTheme(theme);
  }

  const onChangeTitle = (e) => {
    const title = titleRef.current.value;
    setTitle(title);
  }

  const onChangeEmail = (e) => {
    const email = emailRef.current.value;
    setEmail(email);
  }

  const onChangeMessage = (e) => {
    const message = messageRef.current.value;
    setMessage(message);
  }

  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" defaultValue={name} onChange={onChangeName} />
      <input ref={companyRef} className={styles.input} type="text" name="company" defaultValue={company} onChange={onChangeCompany} />
      <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChangeTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" defaultValue={title} onChange={onChangeTitle} />
      <input ref={emailRef} className={styles.input} type="text" name="email" defaultValue={email} onChange={onChangeEmail} />
      <textarea ref={messageRef} className={styles.textarea} name="message" defaultValue={message} onChange={onChangeMessage}></textarea>
      <div ref={fileURLRef} className={styles.fileInput} onChange={onChangeTheme}>
        <ImageFileInput />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form >
  );
}

export default CardAddForm;