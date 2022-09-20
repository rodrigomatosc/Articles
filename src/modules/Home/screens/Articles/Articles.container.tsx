import React, {useEffect, useState} from 'react';
import ArticlesView from './Articles.view';
import Axios from 'axios';
import {Article} from '../../../../types/article.type';

const url =
  'https://newsapi.org/v2/everything?q=tesla&from=2022-08-20&sortBy=publishedAt&apiKey=6b6cc2d199bc4792966328aad56e741f';

const ArticlesContainer: React.FC = props => {
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    Axios.get(url).then(({data}) => data && setArticles(data?.articles));
  }, []);

  return <ArticlesView articles={articles} {...props} />;
};

export default ArticlesContainer;
