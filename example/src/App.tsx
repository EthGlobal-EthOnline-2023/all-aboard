import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { useGoogleSignIn } from 'all-aboard-onboarding-rn';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const {} = useGoogleSignIn()

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
