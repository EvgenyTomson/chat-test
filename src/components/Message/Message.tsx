import styles from './Message.module.css';
import { useSelector } from 'react-redux';
import { MessageT } from 'types/index';
import { selectMessages } from 'store/slices/messagesSlice.ts';
import { selectUsers } from 'store/slices/usersSlice.ts';
import { getMessageTime } from 'utils/index.ts';

type Props = {
  message: MessageT;
};

const Message = ({ message }: Props) => {
  const messages = useSelector(selectMessages);

  const users = useSelector(selectUsers);

  /* Из представленных данных не до конца ясно, считать ли replyTo = 0
     цитатой 0-го сообщения или это означает, что сообщение никого не цитирует
     поскольку новые создаваемые сообщения получают replyTo: 0, счиатаю, что верен второй вариант
  */
  const replyMessage = !!message.replyTo && messages.find((m) => m.id === message.replyTo);
  const authorAvatar = users.find((user) => user.id === message.author)?.image;

  const onQuoteClick = (id: number) => {
    const quotedMessage = document.getElementById(`${id}`);
    quotedMessage?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <li className={styles.message} id={`${message.id}`}>
      <div className={styles.body}>
        <span className={styles.time}>{getMessageTime(message.timestamp)}</span>
        <div className={styles.heading}>
          {authorAvatar && (
            <img className={styles.avatar} src={authorAvatar} alt="Аватар пользователя" />
          )}
          <span className={styles.authorName}>
            {users.find((user) => user.id === message.author)?.name}
          </span>
        </div>
        {!!replyMessage && (
          <div className={styles.quote} onClick={() => onQuoteClick(message.replyTo)}>
            <span className={styles.oval}>
              Цитата&nbsp;
              <span className={styles.quoteAuthor}>
                {users.find((user) => user.id === replyMessage.author)?.name}
              </span>
            </span>
            <span className={styles.quoteText}>{replyMessage.message}</span>
          </div>
        )}

        <span className={styles.text}>{message.message}</span>
      </div>
    </li>
  );
};

export default Message;
