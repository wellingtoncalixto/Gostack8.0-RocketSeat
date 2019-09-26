import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #333;
`;

export const Form = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #fff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 5px;
`;

export const SubmitButton = styled(RectButton).attrs(props => ({
  press: props.press,
}))`
  background: #999;
  height: 40px;
  width: 40px;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
  justify-content: center;
  opacity: ${props => (props.press ? 0.5 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  background: #eee;
  border-radius: 32px;
`;

export const Name = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial;
  margin-bottom: 10px;
`;
export const Bio = styled.Text`
  color: #fff;
  font-family: Arial;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  background: #999;
  align-self: stretch;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;
`;
export const ProfileButtonText = styled.Text`
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
