import api from "../../API";
import { Product } from "../../core/models/Product";


const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get('/products'); // Reemplaza '/products' con el endpoint de tu API
        return response.data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export { getAllProducts };