import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Gap from '../atoms/Gap'
import SearchInput from '../atoms/SearchInput'
import ProductItemSkeleton from '../molecules/ProductItemSkeleton'
import ProductList from './ProductList'

type Props = {
    filteredProducts: any,
    setSearchQuery: any,
    isLoading: boolean
}

const Products = ({
    filteredProducts,
    setSearchQuery,
    isLoading
}: Props) => {
  return (
    <View style={styles.container}>
        <Gap height={20} />
        <SearchInput placeholder="Search..."  onSearch={setSearchQuery} />
        {isLoading && (
          <>
            <Gap height={20} />
            <ProductItemSkeleton />
          </>
        )}
        {filteredProducts && filteredProducts.length === 0 && !isLoading && (
          <>
          <Gap height={20} />
          <Text>No hay productos</Text>
        </>
          
        )}
        {filteredProducts && filteredProducts.length > 0 && (
          <ProductList products={filteredProducts} />
        )}
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 15,
    },
  });

export default Products