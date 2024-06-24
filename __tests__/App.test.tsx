import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';


jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return  jest.fn() 
});
jest.mock('react-native-vector-icons/FontAwesome6', () => {
  return  jest.fn() 
});
jest.mock('@react-navigation/native', () => {
  return {
    NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
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

jest.mock('@tanstack/react-query', () => {
  return {
    QueryClient: jest.fn(),
    QueryClientProvider: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('App', () => {
  it('renders correctly and matches snapshot', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
