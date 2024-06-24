import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../../../src/components/atoms/Header';

jest.mock('react-native-vector-icons/FontAwesome6', () => {
    return  jest.fn(); 
  });

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText} = render(<Header goHome={() => {}} />);
    const textElement = getByText('Banco');
    

    expect(textElement).toBeDefined();
  });

  it('calls goHome function on press', () => {
    const mockGoHome = jest.fn();
    const { getByTestId } = render(<Header goHome={mockGoHome} />);
    const headerContainer = getByTestId('header-container');

    fireEvent.press(headerContainer);

    expect(mockGoHome).toHaveBeenCalledTimes(1);
  });
});