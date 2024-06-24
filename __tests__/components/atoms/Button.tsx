import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Text } from 'react-native';
import Button from '../../../src/components/atoms/Button';

describe('Button component', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<Button label="Test Button" />);
    const labelElement = getByText('Test Button');
    expect(labelElement).toBeDefined();
  });

  it('renders correctly with icon and label', () => {
    const TestIcon = () => <Text>Icon</Text>; 
    const { getByText, getByTestId } = render(
      <Button label="Button with Icon" icon={TestIcon} />,
    );
    const labelElement = getByText('Button with Icon');
    const iconElement = getByTestId('icon-wrapper'); 
    expect(labelElement).toBeDefined();
    expect(iconElement).toBeDefined();
  });

  it('calls onPress callback when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button label="Press Me" onPress={onPressMock} />);
    const button = getByText('Press Me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders with custom styles', () => {
    const { getByTestId, debug } = render(
      <Button label="Custom Style Button" styles={{ backgroundColor: 'blue' }} />,
    );
    const button = getByTestId('button');
    expect(button).toHaveStyle({ backgroundColor: 'blue' });
  });
});