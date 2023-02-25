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
  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    setMenuOpen(false);

    if (buttonName === 'button1') {
        navigation.navigate('news');
      } else if (buttonName === 'button2') {
        navigation.navigate('login');
      } else if (buttonName === 'button3') {
        navigation.navigate('login');
      }
  }
  useEffect(() => {
    // Fetch news data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setNews(data.slice(0, 6))) // Display only the first three items
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
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#003366',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 20,
    paddingTop: 10,
    elevation: 3,
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchBarInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  flatList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  newsItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsBody: {
    fontSize: 16,
  },
});


export default NewsScreen;
