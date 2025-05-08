import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#efefef'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#efefef'
  },
});
