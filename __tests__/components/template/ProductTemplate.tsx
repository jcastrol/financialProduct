import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductTemplate from '../../../src/components/templates/ProductTemplate';
import { Text } from 'react-native-svg';


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

describe('<ProductTemplate />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ProductTemplate>
        <Text testID='children-container'>Children</Text>
      </ProductTemplate>
    );

    expect(getByTestId('header-container')).toBeDefined();
    expect(getByTestId('children-container')).toBeDefined();
  });


});