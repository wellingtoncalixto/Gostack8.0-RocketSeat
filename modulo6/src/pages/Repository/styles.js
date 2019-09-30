import styled from 'styled-components/native';
import {WebView} from 'react-native-webview';

export const Loading = styled.View`
  flex: 1;
  position: relative;
  padding: 10px;
  background-color: #333;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial;
  text-align: center;
`;

export const Browser = styled(WebView)`
  flex: 1;
  background: #333;
`;
