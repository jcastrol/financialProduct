import api from '../../../src/API';
import { getProductbyId } from '../../../src/services/productServices/getProductbyId'

jest.mock('../../../src/API');

describe('getProductbyId', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should fetch product by id successfully', async () => {
      const productId = '1';
      const mockProduct = {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: '',
        date_release: '',
        date_revision: '',
      };
  
      const mockResponse = {
        data: mockProduct,
      };
  
      // Configurar el mock de axios para simular una respuesta exitosa
      api.get.mockResolvedValue(mockResponse);
  
      // Llamar a la función y esperar la respuesta
      const result = await getProductbyId(productId);
  
      expect(result).toEqual(mockProduct);
      expect(api.get).toHaveBeenCalledTimes(1);
      expect(api.get).toHaveBeenCalledWith(`/products/${productId}`);
    });
  
    it('should throw an error when fetching product by id fails', async () => {
      const productId = '1';
      const errorMessage = 'Failed to fetch product';
  
      // Configurar el mock de axios para simular un error
      api.get.mockRejectedValue(new Error(errorMessage));
  
      // Llamar a la función y verificar que lance un error
      await expect(getProductbyId(productId)).rejects.toThrow(errorMessage);
      expect(api.get).toHaveBeenCalledTimes(1);
      expect(api.get).toHaveBeenCalledWith(`/products/${productId}`);
    });
  });