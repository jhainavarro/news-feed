import express from 'express';
import NewsApi from 'newsapi';

const router = express.Router();

const newsApi = new NewsApi('0b76fba0aae94ffc8fad83f24d14237f');

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
