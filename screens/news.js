import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch news data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setNews(data.slice(0, 3))) // Display only the first three items
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    Keyboard.dismiss();
    // Fetch news data from an API using the search query
    fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchQuery}`)
      .then(response => response.json())
      .then(data => setNews(data.slice(0, 3))) // Display only the first three items
      .catch(error => console.error(error));
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    Keyboard.dismiss();
    // Fetch news data from an API without search query
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setNews(data.slice(0, 3))) // Display only the first three items
      .catch(error => console.error(error));
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity style={styles.newsItem}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsBody}>{item.body}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBarInput}
          placeholder="Search news..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={handleClearSearch}>
            <Ionicons name="close-outline" size={24} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#008080',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    elevation: 3,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
});

export default NewsScreen;
