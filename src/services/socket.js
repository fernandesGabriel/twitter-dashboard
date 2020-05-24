import socketClient from 'socket.io-client';

const SOCKET_PATH = '/socket/feed/twitter';

const socket = socketClient(process.env.REACT_APP_SOCKET_HOSTNAME, { path: SOCKET_PATH });

export default socket