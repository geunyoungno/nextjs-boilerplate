import fastifyNextjs from '@fastify/nextjs';
import fastify, { FastifyRequest } from 'fastify';

const server = fastify();

async function noOpParser(_req: FastifyRequest, payload: unknown) {
  return payload;
}

server.register(fastifyNextjs).after(() => {
  server.addContentTypeParser('text/plain', noOpParser);
  server.addContentTypeParser('application/json', noOpParser);
  server.next('/*');
  server.next('/api/*', { method: undefined });
});

server.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  if (err) throw err;

  // eslint-disable-next-line no-console
  console.log('Server listening on <http://localhost:3000>');
});
