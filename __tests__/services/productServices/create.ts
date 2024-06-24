import api from '../../../src/API';
import { saveProducts } from '../../../src/services/productServices/create';

// Mock de axios para simular las respuestas de la API
jest.mock('../../../src/API');

describe('saveProducts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save product successfully', async () => {
    const mockProduct = {
      id: '1',
      name: 'Test Product',
      description: 'A test product',
      logo: 'test.png',
      date_release: '2024-06-30',
      date_revision: '2025-06-30',
    };

    const mockResponse = {
      data: {
        data: mockProduct,
      },
    };

    // Configurar el mock de axios para simular una respuesta exitosa
    api.post.mockResolvedValue(mockResponse);

    // Llamar a la función y esperar la respuesta
    const result = await saveProducts(mockProduct);

    expect(result).toEqual(mockProduct);
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/products', mockProduct);
  });

  it('should throw an error when saving product fails', async () => {
    const mockProduct = {
      id: '1',
      name: 'Test Product',
      description: 'A test product',
      logo: 'test.png',
      date_release: '2024-06-30',
      date_revision: '2025-06-30',
    };

    const errorMessage = 'Failed to save product';

    // Configurar el mock de axios para simular un error
    api.post.mockRejectedValue(new Error(errorMessage));

    // Llamar a la función y verificar que lance un error
    await expect(saveProducts(mockProduct)).rejects.toThrow(errorMessage);
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/products', mockProduct);
  });
});