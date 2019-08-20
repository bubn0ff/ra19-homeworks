const http = require('http'),
      Koa = require('koa'),
      koaBody = require('koa-body'),
      Router = require('koa-router'),
      cors = require('koa2-cors');

const app = new Koa(),
      router = new Router();

app.use(cors());

app.use(koaBody({
  json: true
}));

const notes = [
  {
    id: 0102,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 0103,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  }
];

let nextId = 1;

router.get('/notes', async (ctx, next) => {
  ctx.response.body = notes;
});

router.post('/notes', async(ctx, next) => {
  notes.push({...ctx.request.body, id: nextId++});
  ctx.response.status = 204;
});

router.delete('/notes/:id', async(ctx, next) => {
  const noteId = Number(ctx.params.id),
        index = notes.findIndex(o => o.id === noteId);

  if (index !== -1) {
    notes.splice(index, 1);
  }
  
  ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));