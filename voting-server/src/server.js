import Server from 'socket.io';

export function startServer(store) {
  const io = new Server(8090);
  console.log('Server started on port 8090!');

  store.subscribe(
    () => io.emit('state', store.getState().toJS()) 
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS()); 
    socket.on('action', store.dispatch.bind(store));
  });

}
