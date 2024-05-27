import { useEffect } from 'react';
import './App.css';
import MessageList from './components/MessageList/MessageList';
import AddMessageForm from './components/AddMessageForm/AddMessageForm';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/slices/usersSlice';
import { fetchMessages } from './store/slices/messagesSlice';
import { fetchCurrentUser } from './store/slices/currentUserSlice';
import { AppDispatch } from './store/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    Promise.allSettled([
      dispatch(fetchUsers()),
      dispatch(fetchMessages()),
      dispatch(fetchCurrentUser()),
    ]);
  }, [dispatch]);

  return (
    <>
      <h1>Тестовое задание ARORA</h1>
      <MessageList />
      <AddMessageForm />
      <div id="anchor"></div>
    </>
  );
}

export default App;
