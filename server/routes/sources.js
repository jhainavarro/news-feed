import express from 'express';
import NewsApi from 'newsapi';

const router = express.Router();

const newsApi = new NewsApi(process.env.NEWSAPI_ORG_API_KEY);

router.get('/', (req, res, next) => {
  newsApi.v2.sources({ language: 'en' })
    .then(result => {
      res.send(result);
    })
    .catch(() => {
      res.status(500).send('Unable to fetch list of sources');
    });
});

export default router;
