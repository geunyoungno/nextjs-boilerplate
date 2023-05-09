import fastifyNextjs from '@fastify/nextjs';
import fastify, { FastifyListenOptions, FastifyRequest } from 'fastify';

const server = fastify();

const serverInfo = {
  host: 'localhost',
  port: 3000,
} satisfies FastifyListenOptions;

async function noOpParser(_req: FastifyRequest, payload: unknown) {
  return payload;
}

server
  .register(fastifyNextjs, {
    hostname: serverInfo.host,
    port: serverInfo.port,
  })
  .after(() => {
    server.addContentTypeParser('text/plain', noOpParser);
    server.addContentTypeParser('application/json', noOpParser);
    server.next('/*');
    server.next('/api/*', { method: undefined });
  });

server.listen(serverInfo, (err) => {
  if (err) throw err;

  // eslint-disable-next-line no-console
  console.log('Server listening on <http://localhost:3000>');
});
