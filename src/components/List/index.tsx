import React from 'react';
import {FlatList} from 'react-native';

import styles from './styles';

const List: React.FC = props => {
  return <FlatList style={styles.container} {...props} />;
};

export default List;
