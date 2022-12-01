import React, { useEffect } from 'react';
import { Button, SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  getFcmToken,
  notificationListener,
  requestUserPermission
} from './src/utils/pushnotification.helper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button onPress={() => getFcmToken()} title="GetFcmToken" />
    </SafeAreaView>
  );
};

export default App;
