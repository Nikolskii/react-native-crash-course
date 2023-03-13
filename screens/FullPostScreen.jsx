import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Loading from '../components/Loading';

const StyledFullPostScreen = styled.View`
  padding: 20px;
`;

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const FullPostScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://640d9bba1a18a5db837ab5e0.mockapi.io/Posts/1')
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статью');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledFullPostScreen>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </StyledFullPostScreen>
  );
};

export default FullPostScreen;
