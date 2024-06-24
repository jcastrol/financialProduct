
import api from '../../../src/API';
import { verifyProductById } from '../../../src/services/productServices/verify'

jest.mock('../../../src/API');

describe('verifyProductById', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true when product exists', async () => {
    const id = '1';
    const mockResponse = {
      data: true,
    };

    // Configurar el mock de axios para simular una respuesta exitosa
    api.get.mockResolvedValue(mockResponse);

    // Llamar a la función y esperar la respuesta
    const result = await verifyProductById(id);

    expect(result).toEqual(true);
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith(`/products/verification/${id}`);
  });

  it('should return false when product does not exist', async () => {
    const id = '1';
    const mockResponse = {
      data: false,
    };

    // Configurar el mock de axios para simular una respuesta exitosa
    api.get.mockResolvedValue(mockResponse);

    // Llamar a la función y esperar la respuesta
    const result = await verifyProductById(id);

    expect(result).toEqual(false);
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith(`/products/verification/${id}`);
  });

  it('should throw an error when verifying product fails', async () => {
    const id = '1';
    const errorMessage = 'Failed to verify product';

    // Configurar el mock de axios para simular un error
    api.get.mockRejectedValue(new Error(errorMessage));

    // Llamar a la función y verificar que lance un error
    await expect(verifyProductById(id)).rejects.toThrow(errorMessage);
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith(`/products/verification/${id}`);
  });
});