import { ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
