import io from 'socket.io-client';

const URL = 'https://slimy-bear-15.loca.lt';

export const socket = io(URL);