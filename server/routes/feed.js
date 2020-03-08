import express from 'express';
import NewsApi from 'newsapi';

const router = express.Router();

const newsApi = new NewsApi('0b76fba0aae94ffc8fad83f24d14237f');

router.get('/', (req, res, next) => {
  const { sources, pageSize, page } = req.query;

  const stringifiedSources = sources && sources.join
    ? sources.join(',')
    : undefined;

  const language = !stringifiedSources || stringifiedSources.length === 0
    ? 'en'
    : undefined

  const params = {
    sources: stringifiedSources,
    language,
    pageSize,
    page,
  };

  // Remove undefined values cos the API call will error out
  Object.keys(params)
    .forEach(key => params[key] === undefined && delete params[key]);

  if (!params.sources) {
    res.status(400).send('Please provide a news source to fetch from');
  }

  newsApi.v2.everything(params)
    .then(result => {
      res.send(result);
    })
    .catch(() => {
      res.status(500).send('Unable to fetch feed from selected sources');
    });
});

export default router;
