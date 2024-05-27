export const getMessageTime = (timestamp: number): string => {
  const messageDate = new Date(timestamp);

  const messageDay = messageDate.toLocaleDateString();
  const messageTime = messageDate.toLocaleTimeString();
  const now = new Date(Date.now()).toLocaleDateString();

  return messageDay === now ? messageTime : messageDay;
};
