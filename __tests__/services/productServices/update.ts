import api from '../../../src/API';
import { updateProduct } from '../../../src/services/productServices/update'

jest.mock('../../../src/API');

describe('updateProduct', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should update product successfully', async () => {
      const updatedProduct = {
        id: '1',
        name: 'Updated Product',
        description: 'Updated Description',
        logo: '',
        date_release: '',
        date_revision: '',
      };
  
      const mockResponse = {
        data: updatedProduct,
      };
  
      api.put.mockResolvedValue(mockResponse);
  
      
      const result = await updateProduct(updatedProduct);
      expect(result).toEqual(updatedProduct);
      expect(api.put).toHaveBeenCalledTimes(1);
      expect(api.put).toHaveBeenCalledWith(`/products/${updatedProduct.id}`, updatedProduct);
    });
  
    it('should throw an error when updating product fails', async () => {
      const updatedProduct = {
        id: '1',
        name: 'Updated Product',
        description: 'Updated Description',
        logo: '',
        date_release: '',
        date_revision: '',
      };
      const errorMessage = 'Failed to update product';
  
      // Configurar el mock de axios para simular un error
      api.put.mockRejectedValue(new Error(errorMessage));
  
      // Llamar a la función y verificar que lance un error
      await expect(updateProduct(updatedProduct)).rejects.toThrow(errorMessage);
      expect(api.put).toHaveBeenCalledTimes(1);
      expect(api.put).toHaveBeenCalledWith(`/products/${updatedProduct.id}`, updatedProduct);
    });
  });