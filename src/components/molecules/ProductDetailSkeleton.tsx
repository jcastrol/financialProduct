import React from 'react';
import { StyleSheet, View } from 'react-native';
import Skeleton from '../../components/atoms/Skeleton';
import Gap from '../../components/atoms/Gap';

const ProductDetailSkeleton = () => (
  <View style={styles.container} testID='skeleton-product-detail'>
    <Skeleton height={35} width={200} />
    <Gap height={7} />
    <Skeleton height={30} width={150} />
    <Gap height={20} />
    {[...Array(2)].map((_, i) => (
      <View
        key={i}
        style={styles.row}>
        <Skeleton height={30} width={150} />
        <Skeleton height={30} width={150} />
      </View>
    ))}
    <View
      style={styles.imageContainer}>
      <Skeleton height={30} width={80} />
      <View style={styles.image}>
        <Skeleton height={113} width={200} />
      </View>
    </View>
    {[...Array(2)].map((_, i) => (
      <View
        key={i*2}
        style={styles.row}>
        <Skeleton height={30} width={150} />
        <Skeleton height={30} width={150} />
      </View>
    ))}
  </View>
);
const styles=StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 20,
      },
      row: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
      imageContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
      image: {
        flex: 1,
        paddingVertical: 15,
        paddingLeft: 25,
      }
});
export default ProductDetailSkeleton;