import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 200,
    height: 40,
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    borderRadius: 5,
  },
});
