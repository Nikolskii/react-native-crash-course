import { useEffect, useState } from 'react';
import {
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import Post from '../components/Post';
import Loading from '../components/Loading';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://640d9bba1a18a5db837ab5e0.mockapi.io/Posts')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
      }
      data={items}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('FullPost', {
              id: item.id,
              title: item.title,
            })
          }
        >
          <Post
            title={item.title}
            image={item.imageUrl}
            createdAt={item.createdAt}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;
