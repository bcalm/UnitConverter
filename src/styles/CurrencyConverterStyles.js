import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 200,
    height: 40,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
