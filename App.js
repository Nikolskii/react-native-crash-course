import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

import Post from './components/Post';
import Loading from './components/Loading';

const StyledApp = styled.View`
  margin-top: 50px;
`;

export default function App() {
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
    <StyledApp>
      <StatusBar style="auto" />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Alert.alert('Сообщение', 'Произошел клик по статье')}
          >
            <Post
              title={item.title}
              image={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </StyledApp>
  );
}
