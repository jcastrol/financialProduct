import React, { useCallback, useState } from 'react';
import ProductTemplate from '../../components/templates/ProductTemplate';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationRoutes, ProductScreenNavigationProp, ProductScreenRouteProp} from '../../routes/RootStack';
import useProduct from '../../hooks/useProduct';
import Product from '../../components/organisms/Product';
import { deleteProductbyId } from '../../services/productServices/delete';
import ConfirmationModal from '../../components/molecules/ConfirmationModal';

type Props = {};

const ProductDetailView = (props: Props) => {
  const route = useRoute<ProductScreenRouteProp<NavigationRoutes.ProductDetail>>();
  const navigation=useNavigation<ProductScreenNavigationProp>();
  const {productId} = route.params;
  const {data, isLoading, isError} = useProduct(productId);
  const [openModal, setopenModal] = useState(false)
  

  const handleUpdate = useCallback(async() => {
    if(data){
      navigation.navigate(NavigationRoutes.ProductUpdate,{product:data});
    }
  },[data, navigation]) 
  const handleConfirmation = useCallback(() => {
    setopenModal(true);
  },[]) 
  const closeModal = useCallback(() => {
    setopenModal(false);
  },[]) 

  const handleDelete = useCallback(async() => {
    try{
      const res = await deleteProductbyId(productId);
    if(res){
      navigation.navigate(NavigationRoutes.Products);
    }
    }catch(error){
      console.error(error);
    }
    
  },[navigation]) 
  
  return (
    <ProductTemplate>
      <Product data={data} isLoading={isLoading} isError={isError} handleUpdate={handleUpdate} handleDelete={handleConfirmation}/>
      <ConfirmationModal
            visible={openModal}
            message={`¿Estas seguro de eliminar el producto ${data?.name}?`}
            onClose={closeModal}
            onConfirm={handleDelete}
          />
    </ProductTemplate>
  );
};
export default ProductDetailView;
