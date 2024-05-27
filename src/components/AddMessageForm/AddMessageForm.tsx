import { useRef, useState } from 'react';
import styles from './AddMessageForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { selectCurrentUserId } from 'store/slices/currentUserSlice.ts';
import { fetchMessages } from 'store/slices/messagesSlice.ts';
import { selectUsers } from 'store/slices/usersSlice.ts';
import { API } from 'API/API.ts';

const AddMessageForm = () => {
  const users = useSelector(selectUsers);

  const currentUserId = useSelector(selectCurrentUserId);

  const [message, setMessage] = useState<string>('');

  const formRef = useRef<HTMLFormElement | null>(null);

  const authorAvatar = users.find((user) => user.id === currentUserId)?.image;

  const dispatch = useDispatch<AppDispatch>();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!currentUserId || !message) {
      return;
    }

    API.message
      .post({ author: currentUserId, message })
      .then((status) => {
        if (status === 200) {
          dispatch(fetchMessages());
          setMessage('');
        }
      })
      .catch((err) => console.error(err));
  };

  const onTextAreaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      formRef.current?.requestSubmit();
      e.preventDefault();
    }
  };

  return (
    <form className={styles.form} ref={formRef} onSubmit={onFormSubmit}>
      {authorAvatar && (
        <img className={styles.avatar} src={authorAvatar} alt="Аватар текущего пользователя" />
      )}
      <span className={styles.tooltiptext}>Shift + Enter - перевод строки</span>
      <textarea
        className={styles.text}
        placeholder="Написать сообщение..."
        required
        autoComplete="off"
        onChange={onChange}
        onKeyDown={onTextAreaKeyDown}
        value={message}
      />
      <button className={styles.button} type="submit">
        Отправить
      </button>
    </form>
  );
};

export default AddMessageForm;
