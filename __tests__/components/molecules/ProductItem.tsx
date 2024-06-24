import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductItem from '../../../src/components/molecules/ProductItem';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return  jest.fn(); 
});
describe('ProductItem Component', () => {
  const mockOnPress = jest.fn();
  const name = 'Test Product';
  const id = '12345';

  it('renders correctly', () => {
    const { getByText } = render(<ProductItem name={name} id={id} onPress={mockOnPress} />); 
    expect(getByText(name)).toBeTruthy();
    expect(getByText(`ID: ${id}`)).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(<ProductItem name={name} id={id} onPress={mockOnPress} />);
    
    const touchable = getByTestId('product-item-touchable');
    fireEvent.press(touchable);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});