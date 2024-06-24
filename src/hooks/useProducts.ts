import {useQuery} from '@tanstack/react-query';
import {getAllProducts} from '../services/productServices/getAll';
import { Product } from '../core/models/Product';

const useProducts = () => {
  const products = useQuery<Product[], Error> ({queryKey: ['products'], queryFn: getAllProducts});
  return products;
};

export default useProducts;
