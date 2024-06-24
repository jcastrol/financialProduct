import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = {
    name: string
    id:string
    onPress: () => void
}

const ProductItem: React.FC<Props> = ({ name, id, onPress }) => {
    const handlePress = () => {
      onPress();
    };
  
    return (
      <TouchableOpacity onPress={handlePress} style={styles.container} testID='product-item-touchable'>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.id}>ID: {id}</Text>
        </View>  
        <Icon name="chevron-right" size={20} color="#ABABAB" />
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#D5D5D5',
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: '#FFF'
    },
    textContainer: {
      flex: 1,
      gap: 5,
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    id: {
      fontSize: 14,
      fontWeight: '400',
      color: '#ABABAB',
    },
  });

export default ProductItem