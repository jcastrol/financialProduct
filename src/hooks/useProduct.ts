import {useQuery, useQueryClient} from '@tanstack/react-query';
import { Product } from '../core/models/Product';
import { getProductbyId } from '../services/productServices/getProductbyId';

const useProduct = (id:string) => {
  const queryClient = useQueryClient()

  queryClient.invalidateQueries({ queryKey: [`product-${id}`] })
  const product = useQuery<Product, Error> ({queryKey: [`product-${id}`], queryFn: () => getProductbyId(id)});
  return product;
};

export default useProduct;
