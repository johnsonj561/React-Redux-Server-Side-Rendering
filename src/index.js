import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { ESRCH } from 'constants';

const app = express();

app.use('/api/', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(express.static('public'));

app.get('*', async (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) =>
      (typeof route.loadData === 'function') ? route.loadData(store) : null)
    .map(promise => (promise) ?
      new Promise((resolve) => promise.then(resolve).catch(resolve)) : null);
  
  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    });

});

app.listen(3000, () => {
  console.log('listening on 3000!');
});
