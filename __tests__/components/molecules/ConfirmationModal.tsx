import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ConfirmationModal from '../../../src/components/molecules/ConfirmationModal';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
    return  jest.fn(); 
  });

describe('<ConfirmationModal />', () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();
  const message = "Are you sure you want to proceed?";

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnConfirm.mockClear();
  });

  it('renders correctly when visible', () => {
    const { getByText, getByTestId } = render(
      <ConfirmationModal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        message={message}
      />
    );

    expect(getByTestId('modal-container')).toBeTruthy();
    expect(getByText(message)).toBeTruthy();
  });

  it('calls onClose when close button is pressed', () => {
    const { getByTestId } = render(
      <ConfirmationModal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        message={message}
      />
    );

    fireEvent.press(getByTestId('close-button'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onClose when cancel button is pressed', () => {
    const { getByText } = render(
      <ConfirmationModal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        message={message}
      />
    );

    fireEvent.press(getByText('Cancelar'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onConfirm when confirm button is pressed', () => {
    const { getByText } = render(
      <ConfirmationModal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        message={message}
      />
    );

    fireEvent.press(getByText('Confirmar'));
    expect(mockOnConfirm).toHaveBeenCalled();
  });
});