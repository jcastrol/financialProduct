import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputField from '../../../src/components/molecules/InputFile'; 
describe('InputField Component', () => {
  const mockOnChangeText = jest.fn();

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <InputField
        label="Username"
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter username"
        testID="input-username"
      />
    );

    expect(getByText('Username')).toBeTruthy();
    const input = getByTestId('input-username');
    expect(input.props.placeholder).toBe('Enter username');
  });

  it('calls onChangeText when text changes', () => {
    const { getByTestId } = render(
      <InputField
        label="Username"
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter username"
        testID="input-username"
      />
    );

    const input = getByTestId('input-username');
    fireEvent.changeText(input, 'new text');
    expect(mockOnChangeText).toHaveBeenCalledWith('new text');
  });

  it('displays an error message when errorShow is true', () => {
    const { getByText } = render(
      <InputField
        label="Username"
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter username"
        errorShow={true}
        errorMessage="Error message"
        testID="input-username"
      />
    );

    expect(getByText('Error message')).toBeTruthy();
  });

  it('disables the input field when disabled is true', () => {
    const { getByTestId } = render(
      <InputField
        label="Username"
        value=""
        onChangeText={mockOnChangeText}
        disabled={true}
        testID="input-username"
      />
    );

    const input = getByTestId('input-username');
    expect(input.props.editable).toBe(false);
  });
});