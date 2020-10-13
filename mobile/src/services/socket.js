import io from 'socket.io-client';

const URL = 'https://seuservidoraqui';

export const socket = io(URL);