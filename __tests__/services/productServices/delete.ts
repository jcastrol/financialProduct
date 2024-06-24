import api from '../../../src/API';
import { deleteProductbyId } from '../../../src/services/productServices/delete';


// Mock de axios para simular las respuestas de la API
jest.mock('../../../src/API');

describe('deleteProductbyId', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should delete product successfully', async () => {
    const productId = '1';

    const mockResponse = {
      data: {
        message: 'Product deleted successfully',
      },
    };

    // Configurar el mock de axios para simular una respuesta exitosa
    api.delete.mockResolvedValue(mockResponse);

    // Llamar a la función y esperar la respuesta
    const result = await deleteProductbyId(productId);

    expect(result).toEqual(mockResponse.data);
    expect(api.delete).toHaveBeenCalledTimes(1);
    expect(api.delete).toHaveBeenCalledWith(`/products/${productId}`);
  });

  it('should throw an error when deleting product fails', async () => {
    const productId = '1';
    const errorMessage = 'Failed to delete product';

    // Configurar el mock de axios para simular un error
    api.delete.mockRejectedValue(new Error(errorMessage));

    // Llamar a la función y verificar que lance un error
    await expect(deleteProductbyId(productId)).rejects.toThrow(errorMessage);
    expect(api.delete).toHaveBeenCalledTimes(1);
    expect(api.delete).toHaveBeenCalledWith(`/products/${productId}`);
  });
});