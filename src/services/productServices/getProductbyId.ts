import api from "../../API";
import { Product } from "../../core/models/Product";


const getProductbyId = async (id:string): Promise<Product> => {
   
    try {
        const response = await api.get('/products/'+id);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

export { getProductbyId };