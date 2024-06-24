import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

type Props = {
  goHome: () => void;
};

const Header = (props: Props) => {
  return (
    <Pressable onPress={props.goHome} testID='header-container'>
      <View
        style={styles.container}>
        <Icon name="money-bills" size={20} color="#1B46B1" />
        <Text style={styles.text}>
          Banco
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomColor: '#AEBAD8',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        gap: 10,
      },
      text:{color: '#1B46B1', fontWeight: 700, fontSize: 20}
});
export default Header;
