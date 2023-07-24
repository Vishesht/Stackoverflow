import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Linking} from 'react-native';
import {fetchQuestions} from '../../utils/stackExchangeAPI';

const HottestQuestionsTab = ({topic}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const loadQuestions = useCallback(async () => {
    const fetchedQuestions = await fetchQuestions(topic, page);
    setQuestions(prevQuestions =>
      page === 1 ? fetchedQuestions : [...prevQuestions, ...fetchedQuestions],
    );
    setLoading(false);
  }, [topic, page]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const handleLoadMore = useCallback(() => {
    if (!loading) {
      setPage(prevPage => prevPage + 1);
    }
  }, [loading]);

  const openQuestionInBrowser = useCallback(url => {
    Linking.openURL(url);
  }, []);

  const renderItem = useMemo(
    () =>
      // eslint-disable-next-line react/no-unstable-nested-components
      ({item}) =>
        (
          <TouchableOpacity
            style={styles.questionItem}
            onPress={() => openQuestionInBrowser(item.link)}>
            <View>
              <Text style={styles.questionTitle}>{item.title}</Text>
              {/* Add more information from the item as needed */}
            </View>
          </TouchableOpacity>
        ),
    [openQuestionInBrowser],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={item => item.question_id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
      {loading && <ActivityIndicator size="large" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  questionItem: {
    backgroundColor: '#fff',
    marginBottom: 8,
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HottestQuestionsTab;
