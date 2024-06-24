import api from '../../../src/API';
import { getAllProducts } from '../../../src/services/productServices/getAll';

jest.mock('../../../src/API');


describe('getAllProducts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all products successfully', async () => {
    const mockProducts = [
      { id: '1', name: 'Product 1', description: 'Description 1', logo: '', date_release: '', date_revision: '' },
      { id: '2', name: 'Product 2', description: 'Description 2', logo: '', date_release: '', date_revision: '' },
    ];

    const mockResponse = {
      data: {
        data: mockProducts,
      },
    };

    // Configurar el mock de axios para simular una respuesta exitosa
    api.get.mockResolvedValue(mockResponse);

    // Llamar a la función y esperar la respuesta
    const result = await getAllProducts();

    expect(result).toEqual(mockProducts);
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('/products');
  });

  it('should throw an error when fetching products fails', async () => {
    const errorMessage = 'Failed to fetch products';

    // Configurar el mock de axios para simular un error
    api.get.mockRejectedValue(new Error(errorMessage));

    // Llamar a la función y verificar que lance un error
    await expect(getAllProducts()).rejects.toThrow(errorMessage);
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('/products');
  });
});