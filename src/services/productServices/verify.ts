import api from "../../API";

const verifyProductById= async (id:string): Promise<Boolean> => {
   
    try {
        const response = await api.get(`/products/verification/${id}`); 
        
        return response.data;
    } catch (error) {
        console.error('Error verifying product:', error);
        throw error;
    }
};

export { verifyProductById };