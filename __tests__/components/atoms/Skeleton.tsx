import React from 'react';
import { render} from '@testing-library/react-native';
import Skeleton from '../../../src/components/atoms/Skeleton';

describe('Skeleton component', () => {
    it('renders correctly with default props', () => {
      const { getByTestId } = render(<Skeleton />);
  
      const skeletonView = getByTestId('skeleton-view'); 
  
      expect(skeletonView).toBeDefined();
      expect(skeletonView).toHaveStyle({
        opacity: 0.3,
        height: 100,
        width: 100,
        backgroundColor: 'grey',
        borderRadius: 0, // Verifica si el valor predeterminado es 0 o el que hayas establecido
      });
    });
  
    it('renders as circle when isCircle prop is true', () => {
      const { getByTestId } = render(<Skeleton width={100} height={100} isCircle />);
  
      const skeletonView = getByTestId('skeleton-view'); // Ajusta testID según tu implementación real
  
      expect(skeletonView).toHaveStyle({
        borderRadius: 50, // Verifica que el borde sea la mitad del ancho cuando isCircle es true
      });
    });
  });