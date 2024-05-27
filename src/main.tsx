import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StoreProvider } from 'store/StoreProvider.tsx';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
