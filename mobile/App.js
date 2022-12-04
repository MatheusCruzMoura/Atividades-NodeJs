import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem vindo ao React Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222a34',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: '1.5rem'
  }
});
