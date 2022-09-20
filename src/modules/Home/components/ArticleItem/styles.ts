import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  constainerDetails: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    height: 70,
    aspectRatio: 16 / 9,
    marginRight: 16,
  },
  title: {
    color: '#2e2e2e',
    fontSize: 18,
  },
  description: {
    flex: 1,
    color: 'black',
    fontSize: 12,
    paddingRight: 20,
    marginBottom: 10,
  },
  date: {
    color: '#979797',
    fontSize: 10,
  },
  author: {
    color: '#979797',
    fontSize: 10,
  },
});
