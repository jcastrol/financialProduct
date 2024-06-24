import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ErrorView from '../../../src/components/atoms/ErrorView';

describe('ErrorView component', () => {
    it('renders error message correctly', () => {
      const { getByText } = render(<ErrorView />);
      const errorMessage = getByText('Hubo un problema ,intenta otra vez');
      expect(errorMessage).toBeDefined();
    });
  
    it('renders with correct styles', () => {
      const { getByTestId } = render(<ErrorView />);
      const viewContainer = getByTestId('error-view-container'); // Adjust testID based on your actual implementation
      const errorText = getByTestId('error-text'); // Adjust testID based on your actual implementation
  
      expect(viewContainer).toHaveStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
      });
  
      expect(errorText).toHaveStyle({
        fontSize: 16,
        color: 'red',
      });
    });
  });