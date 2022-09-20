import React from 'react';
import {Image, Text, View} from 'react-native';
import {Article} from '../../../../types/article.type';
import styles from './styles';

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({article}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: article.urlToImage,
        }}
      />
      <View style={styles.constainerDetails}>
        <Text style={styles.date}>{article.publishedAt}</Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
          {article.title}
        </Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.description}>
          {article.description}
        </Text>
        <Text style={styles.author}>{`Author: ${article.author || ''}`}</Text>
      </View>
    </View>
  );
};

export default ArticleItem;
