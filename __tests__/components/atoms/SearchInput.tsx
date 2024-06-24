import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import SearchInput from '../../../src/components/atoms/SearchInput';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
    return  jest.fn(); 
  });

describe('SearchInput component', () => {
    jest.useFakeTimers();
    it('renders correctly with default props', () => {
      const { getByTestId} = render(<SearchInput onSearch={() => {}} />);
      const inputElement = getByTestId('search-input');
  
      expect(inputElement).toBeDefined();
    });
    it('calls onSearch after timeout', () => {
        const mockOnSearch = jest.fn();
        const { getByTestId } = render(<SearchInput onSearch={mockOnSearch} />);
        const inputElement = getByTestId('search-input');
    
        fireEvent.changeText(inputElement, 'example search');
        act(() => {
          jest.advanceTimersByTime(500); // Avanzar el temporizador por 500ms
        });
    
        expect(mockOnSearch).toHaveBeenCalledWith('example search');
      });
  
    it('calls onSearch with correct text on submit editing', () => {
      const mockOnSearch = jest.fn();
      const { getByTestId } = render(<SearchInput onSearch={mockOnSearch} />);
      const inputElement = getByTestId('search-input');
  
      fireEvent.changeText(inputElement, 'example search');
      fireEvent(inputElement,'onSubmitEditing');
  
      expect(mockOnSearch).toHaveBeenCalledWith('example search');
    });
  
    it('clears input and calls onSearch with empty text on clear button press', () => {
      const mockOnSearch = jest.fn();
      const { getByTestId} = render(<SearchInput onSearch={mockOnSearch} />);
      const inputElement = getByTestId('search-input');
  
      fireEvent.changeText(inputElement, 'example search');
      const clearButton = getByTestId('clear-button');
      fireEvent.press(clearButton);
  
      expect(mockOnSearch).toHaveBeenCalledWith('');
      expect(inputElement.props.value).toBe('');
    });
  });