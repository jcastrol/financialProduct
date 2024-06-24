import React, { useCallback } from 'react';
import ProductTemplate from '../../components/templates/ProductTemplate';
import {NavigationProp} from '@react-navigation/native';
import useRegistroProductoForm from '../../hooks/useRegistroProductoForm';
import FormProduct from '../../components/organisms/FormProduct';
import {saveProducts} from '../../services/productServices/create';
import {convertDateFormat} from '../../utils/formatDate';
import {NavigationRoutes} from '../../routes/RootStack';

type Props = {navigation: NavigationProp<any, any>};

const ProductCreateView = ({navigation}: Props) => {
  const {
    form,
    errors,
    handleInputChange,
    handleReset,
    checkIdExists,
    hasError,
    validate,
  } = useRegistroProductoForm();

  const handleButtonPress = useCallback( async () => {
    try {
      const val = await validate();
      await checkIdExists(form.id);
      if (hasError()) {
        return;
      }
      if (!val) {
        return;
      }
      const res = await saveProducts({
        ...form,
        date_release: convertDateFormat(form.date_release),
        date_revision: convertDateFormat(form.date_revision),
      });
      if (res) {
        navigation.navigate(NavigationRoutes.ProductDetail, {productId: form.id});
      }
    } catch (error) {
      console.error(error);
    }
  },[form, navigation]);
  return (
    <ProductTemplate>
      <FormProduct
        form={form}
        errors={errors}
        handleInputChange={handleInputChange}
        handleReset={handleReset}
        handleButtonPress={handleButtonPress}
      />
    </ProductTemplate>
  );
};

export default ProductCreateView;
