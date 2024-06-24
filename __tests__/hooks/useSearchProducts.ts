// useSearchProducts.test.js

import { renderHook, act } from '@testing-library/react-native';
import useProducts from '../../src/hooks/useProducts';
import useSearchProducts from '../../src/hooks/useSearchProducts';

// Mock de useProducts para simular su comportamiento
jest.mock('../../src/hooks/useProducts', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseProducts = useProducts as jest.MockedFunction<typeof useProducts>;

describe('useSearchProducts', () => {
  beforeEach(() => {
    // Mockear el comportamiento de useProducts
    mockUseProducts.mockReturnValue({
      data: [
        { id: '1', name: 'Product 1', description: 'Description 1', logo: '', date_release: '', date_revision: '' },
        { id: '2', name: 'Product 2', description: 'Description 2', logo: '', date_release: '', date_revision: '' },
      ],
      isLoading: false,
      refetch: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useSearchProducts());

    expect(result.current.searchQuery).toEqual('');
    expect(result.current.filteredProducts).toEqual([
      { id: '1', name: 'Product 1', description: 'Description 1', logo: '', date_release: '', date_revision: '' },
      { id: '2', name: 'Product 2', description: 'Description 2', logo: '', date_release: '', date_revision: '' },
    ]);
    expect(result.current.isLoading).toBe(false);
    expect(typeof result.current.setSearchQuery).toBe('function');
    expect(typeof result.current.refetch).toBe('function');
  });

  it('should filter products based on searchQuery', () => {
    const { result } = renderHook(() => useSearchProducts());

    act(() => {
      result.current.setSearchQuery('product 1');
    });

    expect(result.current.filteredProducts).toEqual([
      { id: '1', name: 'Product 1', description: 'Description 1', logo: '', date_release: '', date_revision: '' },
    ]);

    act(() => {
      result.current.setSearchQuery('2');
    });

    expect(result.current.filteredProducts).toEqual([
      { id: '2', name: 'Product 2', description: 'Description 2', logo: '', date_release: '', date_revision: '' },
    ]);

    act(() => {
      result.current.setSearchQuery('nonexistent');
    });

    expect(result.current.filteredProducts).toEqual([]);
  });

  it('should handle isLoading state correctly', () => {
    mockUseProducts.mockReturnValueOnce({
      data: [],
      isLoading: true,
      refetch: jest.fn(),
    });

    const { result, rerender } = renderHook(() => useSearchProducts());

    expect(result.current.isLoading).toBe(true);

    rerender();

    expect(result.current.isLoading).toBe(false);
  });

  it('should refetch products when refetch function is called', () => {
    const { result } = renderHook(() => useSearchProducts());

    act(() => {
      result.current.refetch();
    });

    expect(mockUseProducts().refetch).toHaveBeenCalledTimes(1);
  });
});
