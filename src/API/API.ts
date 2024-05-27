import axios from 'axios';
import { MessageBodyT } from 'types/index';

const defaultPath = 'http://localhost:8080';

export const API = {
  users: {
    get: async () => {
      return await axios.get(`${defaultPath}/api/json/users`);
    },
  },
  me: {
    get: async () => {
      return await axios.get(`${defaultPath}/api/json/me`);
    },
  },
  messages: {
    get: async () => {
      return await axios.get(`${defaultPath}/api/json/messages`);
    },
  },
  message: {
    post: async (messageBody: MessageBodyT) => {
      const { status } = await axios.post(`${defaultPath}/api/json/message`, messageBody);

      return status;
    },
  },
};
