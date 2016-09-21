import Server from 'socket.io';

export default function startServer() {
  const io = new Server().attach(8090);
  console.log('Server started on port 8090!');

  store.subscribe(
    () => io.emit('state', store.getState().toJS()) 
  );

//  io.on('connection', (socket) => {
//    socket.emit('state', store.getState().toJS()); 
//    socket.on('action', store.dispatch.bind(store)));
//  });
  
  store.disptach({
    type: 'SET_ENTRIES',
    entries: require('./entries.json') 
  });

  store.dispatch({type: 'NEXT'});
}
