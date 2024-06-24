import api from "../../API";
import { Product } from "../../core/models/Product";


const updateProduct = async (product:Product): Promise<Product> => {
    try {
        const response = await api.put(`/products/${product.id}`,product); 
        
        return response.data;
    } catch (error) {
        console.error('Error save products:', error);
        throw error;
    }
};

export { updateProduct };