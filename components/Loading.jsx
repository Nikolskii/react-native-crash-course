import { ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledLoading = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoadingText = styled.Text`
  margin-top: 15px;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <ActivityIndicator size="large" />
      <LoadingText>Загрузка...</LoadingText>
    </StyledLoading>
  );
};

export default Loading;
