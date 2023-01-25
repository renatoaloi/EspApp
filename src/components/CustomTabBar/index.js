import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TabArea, TabItem, TabItemCenter} from './styles';
import db from '../../../db.json';

export default ({navigation}) => {
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Historic')}>
        <FontAwesome name="history" size={20} style={{color: 'white'}} />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Home')}>
        <MaterialIcons
          name="home"
          size={25}
          style={{color: db.theme.colors.primary}}
        />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Profile')}>
        <FontAwesome name="user-circle" size={20} style={{color: 'white'}} />
      </TabItem>
    </TabArea>
  );
};
