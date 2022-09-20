import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../../../components/Header';
import List from '../../../../components/List';
import {Article} from '../../../../types/article.type';
import ArticleItem from '../../components/ArticleItem';

export interface ArticlesViewProps {
  articles: Array<Article>;
  onLoadMore: () => void;
}

const ArticlesView: React.FC<ArticlesViewProps> = ({articles}) => {
  return (
    <View style={styles.container}>
      <Header title="Articles" />
      <List
        data={articles}
        renderItem={({item}) => <ArticleItem article={item} />}
        keyExtractor={(item: Article) => item.title + item.publishedAt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});

export default ArticlesView;
