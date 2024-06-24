import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProductDetail from '../molecules/ProductDetail';
import ErrorView from '../atoms/ErrorView';
import ProductDetailSkeleton from '../molecules/ProductDetailSkeleton';
import Button from '../atoms/Button';
import Gap from '../atoms/Gap';
import { Product  } from '../../core/models/Product';

type Props = {
  data: Product | undefined;
  isLoading: boolean;
  isError: boolean;
  handleUpdate:() => Promise<void>
  handleDelete:() => Promise<void>
}

const ProductContainer = ({
  data,
  isLoading,
  isError,
  handleDelete,
  handleUpdate,

}: Props) => {
    if (!data && !isLoading && isError) {
        return (
            <ErrorView />
        );
      }
      if (isLoading) {
        return (
            <ProductDetailSkeleton />
        );
      }
      return (
        <>
          {data && <ProductDetail data={data} />}
    
          <View style={styles.buttonContainer}>
            <Button
              label="Editar"
              onPress={handleUpdate}
              styles={{backgroundColor: '#DCE1EB'}}
            />
            <Gap height={10} />
            <Button
              label="Eliminar"
              onPress={handleDelete}
              styles={{backgroundColor: '#C72020'}}
              color="#fff"
            />
          </View>
        </>
      );
    };
    
    const styles = StyleSheet.create({
      buttonContainer: {paddingHorizontal: 15, paddingBottom: 30},
    });

export default ProductContainer 
