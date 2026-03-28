import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import NewsItem from './NewsItem';
import { NewsData } from '../utils/handle-api';

interface NewsListProps {
  news: NewsData[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <FlatList
      data={news}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <NewsItem
          title={item.title}
          image={item.image}
          published={item.published}
          link={item.link}
        />
      )}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
  },
});
