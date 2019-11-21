import { GraphQLServer, PubSub } from 'graphql-yoga';
import cors from 'cors';
import { resolvers, fragmentReplacements } from './resolvers/index';

import prisma from './prisma';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request) {
    return { pubsub, prisma, request };
  },
  fragmentReplacements
});

server.express.use(cors());

export default server;