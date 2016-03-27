import server from './server';
const port = process.env.PORT || 1972;

server.listen(port, () => {
  console.log('server running');
});
