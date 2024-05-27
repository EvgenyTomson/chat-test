import { useEffect } from 'react';
import Message from '../Message/Message';
import styles from './MessageList.module.css';
import { useSelector } from 'react-redux';
import { selectMessages } from 'store/slices/messagesSlice.ts';

const MessageList = () => {
  const messages = useSelector(selectMessages);

  useEffect(() => {
    const addMessageForm = document.getElementById('anchor');

    if (addMessageForm) {
      addMessageForm.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  return (
    <ul className={styles.list}>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </ul>
  );
};

export default MessageList;
