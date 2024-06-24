import React, {useEffect} from 'react';
import ProductTemplate from '../../components/templates/ProductTemplate';
import {NavigationProp, useRoute} from '@react-navigation/native';
import useRegistroProductoForm from '../../hooks/useRegistroProductoForm';
import FormProduct from '../../components/organisms/FormProduct';
import {NavigationRoutes, ProductScreenRouteProp} from '../../routes/RootStack';
import {updateProduct} from '../../services/productServices/update';
import {convertDateFormat, convertISOFormat, formatDate} from '../../utils/formatDate';

type Props = {navigation: NavigationProp<any, any>};

const ProductUpdateView = ({navigation}: Props) => {
  const route =
    useRoute<ProductScreenRouteProp<NavigationRoutes.ProductUpdate>>();
  const {
    form,
    errors,
    handleInputChange,
    handleReset,
    validate,
    setForm,
  } = useRegistroProductoForm();

  useEffect(() => {
    if (route?.params?.product) {
      setForm({
        ...route.params.product,
        date_release: convertISOFormat(route.params.product.date_release),
        date_revision: convertISOFormat(route.params.product.date_revision),
      });
    }
  }, []);

  const handleButtonPress = async () => {
    try {
      const val = await validate();
      if (val) {
        const res = await updateProduct({
          ...form,
          date_release: convertDateFormat(form.date_release),
          date_revision: convertDateFormat(form.date_revision),
        });
        if (res) {
          navigation.navigate(NavigationRoutes.ProductDetail, {productId: form.id});
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ProductTemplate>
      <FormProduct
        form={form}
        errors={errors}
        handleInputChange={handleInputChange}
        handleReset={handleReset}
        handleButtonPress={handleButtonPress}
        type="update"
      />
    </ProductTemplate>
  );
};

export default ProductUpdateView;
