import Reactotron from 'reactotron-react-native';

import Config from 'react-native-config';

if (__DEV__) {
  const tron = Reactotron.configure({host: Config.HOST})
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
