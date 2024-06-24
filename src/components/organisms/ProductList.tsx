import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import ProductItem from '../molecules/ProductItem';
import Gap from '../atoms/Gap';
import {Product} from '../../core/models/Product';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes, ProductScreenNavigationProp} from '../../routes/RootStack';

type Props = {
  products: Product[];
};

const ProductList = ({products}: Props) => {
  const navigation = useNavigation<ProductScreenNavigationProp>();
  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigation.navigate(NavigationRoutes.ProductDetail, {productId: id});
    },
    [navigation],
  );
  return (
    <FlatList
      data={products}
      ListHeaderComponent={() => <Gap height={20} />}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => {
        const handlePress = () => {
          handleNavigateToDetail(item.id);
        };
        return (
          <ProductItem name={item.name} id={item.id} onPress={handlePress} />
        );
      }}
      testID='product-list'
    />
  );
};

export default ProductList;
