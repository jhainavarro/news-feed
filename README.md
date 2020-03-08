# news-feed
Connects through the newsapi.org API to get the latest news articles from different news sources

`/sources/`
- [Sample request](http://ec2-3-0-146-165.ap-southeast-1.compute.amazonaws.com/api/sources)
- Get the list of all English news sources

`/feed/`
- [Sample request](http://ec2-3-0-146-165.ap-southeast-1.compute.amazonaws.com/api/feed?sources[]=bbc-news&sources[]=the-washington-post&pageSize=5&page=1)
- Get a page from the list of articles of one or more news sources (more info in https://newsapi.org/docs/endpoints/everything)

Parameter|Notes
---------|----
`sources[]`|source id
 `pageSize`|number of results to fetch
`page`|starting from 1
