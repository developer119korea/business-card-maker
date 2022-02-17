import React, { useRef } from 'react'
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, onEditCard, onDeleteCard }) => {
  const { id, name, company, title, email, message, theme, fileName, fileURL } = card;
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChangeValue = (e) => {
    const card = {
      id: id,
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: ''
    }
    onEditCard(card);
  }

  const onSubmit = () => {
    onDeleteCard(id);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" defaultValue={name} onBlur={onChangeValue} />
      <input ref={companyRef} className={styles.input} type="text" name="company" defaultValue={company} onBlur={onChangeValue} />
      <select ref={themeRef} className={styles.select} name="theme" defaultValue={theme} onChange={onChangeValue}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} readOnly className={styles.input} type="text" name="title" value={title} onBlur={onChangeValue} />
      <input ref={emailRef} className={styles.input} type="text" name="email" defaultValue={email} onBlur={onChangeValue} />
      <textarea ref={messageRef} className={styles.textarea} name="message" defaultValue={message} onBlur={onChangeValue}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form >
  );
}

export default CardEditForm;