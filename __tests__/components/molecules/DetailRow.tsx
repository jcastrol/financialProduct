import React from 'react';
import { render } from '@testing-library/react-native';
import { DetailRow } from '../../../src/components/molecules/DetailRow'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

describe('DetailRow Component', () => {
  it('renders correctly with given label and value', () => {
    const { getByText } = render(<DetailRow label="Test Label" value="Test Value" />);

    expect(getByText('Test Label')).toBeTruthy();
    expect(getByText('Test Value')).toBeTruthy();
  });

  it('applies correct styles to label and value', () => {
    const { getByText } = render(<DetailRow label="Styled Label" value="Styled Value" />);

    const label = getByText('Styled Label');
    const value = getByText('Styled Value');

    expect(label).toHaveStyle({ fontSize: 14, fontWeight: '600' });
    expect(value).toHaveStyle({ fontSize: 14, fontWeight: '300' });
  });
});