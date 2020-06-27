import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';

import Iframe from 'react-iframe'

export default function Agendamento() {
  return (
    <View style={styles.container}>
      <Iframe
        url="https://agendaigreja.fbrsolutions.com.br"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        position="relative"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
