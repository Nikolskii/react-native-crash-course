import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native';
import FullPostScreen from './screens/FullPostScreen';
import HomeScreen from './screens/HomeScreen';

const StyledApp = styled.View`
  margin-top: 50px;
`;

export default function App() {
  return (
    <StyledApp>
      {/* <HomeScreen /> */}
      <FullPostScreen />
      <StatusBar style="auto" />
    </StyledApp>
  );
}
