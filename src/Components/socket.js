import { io } from 'socket.io-client';

const URL = 'http://127.0.0.1:1010/connection'


export const socket = io(URL);