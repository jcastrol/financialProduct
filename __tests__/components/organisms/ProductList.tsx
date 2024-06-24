import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductList from '../../../src/components/organisms/ProductList';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return jest.fn();
});
jest.mock('react-native-vector-icons/FontAwesome6', () => {
  return jest.fn();
});
jest.mock('@react-navigation/native', () => {
  return {
    NavigationContainer: ({children}: {children: React.ReactNode}) => children,
    useNavigation: jest.fn().mockImplementation(() => ({
      navigate: jest.fn(),
    })),
  };
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

describe('<ProductList />', () => {
  const products = [
    {
      id: '1',
      name: 'Test Product',
      description: 'This is a test product',
      logo: 'https://example.com/logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-12-01',
    },
    {
      id: '2',
      name: 'Test Product 2',
      description: 'This is a test product 2',
      logo: 'https://example.com/logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-12-01',
    },
    {
      id: '3',
      name: 'Test Product 3',
      description: 'This is a test product 3',
      logo: 'https://example.com/logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-12-01',
    },
  ];

  it('renders FlatList with correct products', () => {
    const {getByTestId,getAllByTestId} = render(<ProductList products={products} />);
    expect(getByTestId('product-list')).toBeDefined();
    expect(getAllByTestId('product-item-touchable').length).toEqual(3);
    
  });
});
