import io from 'socket.io-client';
let socket: any;
socket = io('https://productboard-backend.herokuapp.com/', { transports: ['websocket'] });
socket.emit('new_board_status_change', { a: "a", b: "b" });
// console.log(socket);
socket.on('connect_error', (err: any) => {
  console.log(err);
  console.log(`connect_error due to: ${err.message}`);
});

export default socket;
