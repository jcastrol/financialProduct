import React from 'react';
import { render } from '@testing-library/react-native';
import Products from '../../../src/components/organisms/Products';

jest.mock('@react-navigation/native', () => {
    return {
      NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
      useNavigation:jest.fn().mockImplementation(()=>({
        navigate:jest.fn()
      })),
    };
  });
  jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
    return  jest.fn() 
  });
  jest.mock('react-native-vector-icons/FontAwesome6', () => {
    return  jest.fn() 
  });
  
  jest.mock('@react-navigation/native-stack', () => {
    return {
      createNativeStackNavigator: jest.fn(() => {
        return {
          Navigator: ({ children }: { children: React.ReactNode }) => children,
          Screen: () => null,
        };
      }),
    };
  });
  
  jest.mock('react-native-gesture-handler', () => {
    return {
      GestureHandlerRootView: ({ children }: { children: React.ReactNode }) => children,
    };
  });
  
  jest.mock('@tanstack/react-query', () => {
    return {
      QueryClient: jest.fn(),
      QueryClientProvider: ({ children }: { children: React.ReactNode }) => children,
    };
  });
  
  const setSearchQueryMock = jest.fn();

describe('<Products />', () => {
  it('renders ProductItemSkeleton when isLoading is true', () => {
    const { getByTestId } = render(
      <Products filteredProducts={[]} setSearchQuery={setSearchQueryMock} isLoading={true} />
    );
    expect(getByTestId('skeleton-view')).toBeDefined();
  });

  it('renders "No hay productos" message when filteredProducts is empty and isLoading is false', () => {
    const { getByText } = render(
      <Products filteredProducts={[]} setSearchQuery={setSearchQueryMock} isLoading={false} />
    );
    expect(getByText('No hay productos')).toBeDefined();
  });

  it('renders ProductList when filteredProducts has items', () => {
    const filteredProducts = [
      { id: '1', name: 'Product 1', description: 'Description 1' },
      { id: '2', name: 'Product 2', description: 'Description 2' },
    ];
    const { getAllByTestId } = render(
      <Products filteredProducts={filteredProducts} setSearchQuery={setSearchQueryMock} isLoading={false} />
    );
    expect(getAllByTestId('product-item-touchable').length).toEqual(filteredProducts.length);
  });
});