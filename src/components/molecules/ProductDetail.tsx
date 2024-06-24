import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Product} from '../../core/models/Product';
import {DetailRow} from './DetailRow';
type Props = {
  data: Product;
};
const ProductDetail = ({data}: Props) => (
  <View style={styles.container}>
    <ScrollView style={styles.scrollView} bounces={false}>
      <Text style={styles.idText}>ID: {data?.id}</Text>
      <Text style={styles.extraInfoText}>Información extra</Text>
      <View style={styles.detailsContainer}>
        <DetailRow label="Nombre" value={data?.name} />
        <DetailRow label="Descripción" value={data?.description} />
        <View style={styles.logoContainer}>
          <Text style={styles.logoLabel}>Logo</Text>
          <View style={styles.logoImageContainer}>
            <Image
              source={{uri: data?.logo}}
              style={styles.logoImage}
              accessibilityLabel="Product logo"
            />
          </View>
        </View>
        <DetailRow label="Fecha de Liberación" value={data?.date_release} />
        <DetailRow label="Fecha de Revisión" value={data?.date_revision} />
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  idText: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  },
  extraInfoText: {
    fontSize: 14,
    fontWeight: '300',
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
  },
  logoLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  logoImageContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 25,
  },
  logoImage: {
    width: 200,
    height: 113,
    backgroundColor: '#DCE1EB',
  },
});
export default ProductDetail;
