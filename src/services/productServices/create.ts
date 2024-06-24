import api from "../../API";
import { Product } from "../../core/models/Product";


const saveProducts = async (product:Product): Promise<Product> => {
    try {
        const response = await api.post('/products',product); 
        return response.data.data;
    } catch (error) {
       
        throw error;
    }
};

export { saveProducts };