import {View,  StyleSheet, } from 'react-native';
import React, { useCallback } from 'react';
import ProductTemplate from '../../components/templates/ProductTemplate';
import Button from '../../components/atoms/Button';
import useSearchProducts from '../../hooks/useSearchProducts';
import Products from '../../components/organisms/Products';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { NavigationRoutes } from '../../routes/RootStack';

type Props = {
  navigation: NavigationProp<any, any>;
};

const ProductsView = ({ navigation }: Props) => {
  const {filteredProducts,setSearchQuery, isLoading,refetch} = useSearchProducts();
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  )

  const handleAddButton = useCallback(() => {
    navigation.navigate(NavigationRoutes.ProductCreate);
  }, [navigation]);
  
 
  return (
    <ProductTemplate>
      <Products filteredProducts={filteredProducts} setSearchQuery={setSearchQuery} isLoading={isLoading} />
      <View style={styles.buttonContainer}>
        <Button label="Agregar" onPress={handleAddButton} />
      </View>
    </ProductTemplate>
  );
};
const styles = StyleSheet.create({
  
  buttonContainer: {
    paddingHorizontal: 15,
    height: 70,
  },
});
export default ProductsView;
