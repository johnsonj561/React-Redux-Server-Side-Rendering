import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', async (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) =>
    (typeof route.loadData === 'function') ? route.loadData(store) : null);
  
  await Promise.all(promises);
  const html = renderer(req, store);
  res.send(html);
});

app.listen(3000, () => {
  console.log('listening on 3000!');
});
