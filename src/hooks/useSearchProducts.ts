import {useState, useMemo} from 'react';
import useProducts from './useProducts';

const useSearchProducts = () => {
  const {data:products, isLoading,refetch} = useProducts();
  const [searchQuery, setSearchQuery] = useState<string>('');
  

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    if (!products) return [];
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.id.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, products]);

  return {
    searchQuery,
    setSearchQuery,
    filteredProducts,
    isLoading,
    refetch
  };
};

export default useSearchProducts;
