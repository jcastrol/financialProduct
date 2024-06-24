// useRegistroProductoForm.test.js

import { renderHook, act } from '@testing-library/react-native';
import useRegistroProductoForm from '../../src/hooks/useRegistroProductoForm';
import { verifyProductById } from '../../src/services/productServices/verify';

// Mock de verifyProductById para simular su comportamiento
jest.mock('../../src/services/productServices/verify');

describe('useRegistroProductoForm', () => {
  beforeEach(() => {
    // Restaurar el mock de verifyProductById antes de cada prueba
    verifyProductById.mockReset();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useRegistroProductoForm());

    expect(result.current.form).toEqual({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    });

    expect(result.current.errors).toEqual({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    });

    expect(typeof result.current.handleInputChange).toBe('function');
    expect(typeof result.current.handleReset).toBe('function');
    expect(typeof result.current.checkIdExists).toBe('function');
    expect(typeof result.current.hasError).toBe('function');
    expect(typeof result.current.validate).toBe('function');
  });

  it('should handle input change and validate fields', () => {
    const { result } = renderHook(() => useRegistroProductoForm());

    act(() => {
      result.current.handleInputChange('id', 'product1');
    });

    expect(result.current.form.id).toBe('product1');
    expect(result.current.errors.id).toBe('');

    act(() => {
      result.current.handleInputChange('name', '');
    });

    expect(result.current.errors.name).toBe('El nombre debe tener al menos 5 caracteres');

    act(() => {
      result.current.handleInputChange('date_release', '2023-06-30');
    });

    expect(result.current.form.date_release).toBe('2023-06-30');
    
  });

  it('should check if ID exists', async () => {
    verifyProductById.mockResolvedValue(true);

    const { result } = renderHook(() => useRegistroProductoForm());

    await act(async () => {
      await result.current.checkIdExists('existingId');
      
    });

    expect(result.current.errors.id).toBe('El ID ya existe');

    verifyProductById.mockRejectedValueOnce(new Error('El nombre debe tener al menos 5 caracteres'));

    await act(async () => {
      await result.current.checkIdExists('newId');
    });

    expect(result.current.errors.id).toBe('El ID no pudo ser verificado');
  });

  it('should reset form', () => {
    const { result } = renderHook(() => useRegistroProductoForm());

    act(() => {
      result.current.handleInputChange('id', 'product1');
      result.current.handleInputChange('name', 'Product 1');
      result.current.handleInputChange('date_release', '2023-06-30');
      result.current.handleReset();
    });

    expect(result.current.form).toEqual({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    });

    expect(result.current.errors).toEqual({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    });
  });

  it('should validate form and set errors', () => {
    const { result } = renderHook(() => useRegistroProductoForm());

    act(() => {
      result.current.handleInputChange('id', 'product1');
      result.current.handleInputChange('name', '');
      result.current.validate();
    });

    expect(result.current.errors.name).toBe('El nombre debe tener al menos 5 caracteres');

    act(() => {
      result.current.handleInputChange('name', 'Product 1');
      result.current.validate();
    });

    expect(result.current.errors).toEqual({
        "date_release": "La fecha de liberación es obligatoria",
        "date_revision": "La fecha de revisión es obligatoria",
        "description": "La descripción debe tener al menos 10 caracteres",
        "logo": "El logo es obligatorio",
        "name": "El nombre debe tener al menos 5 caracteres",
    });
  });

  it('should determine if there are errors', () => {
    const { result } = renderHook(() => useRegistroProductoForm());

    expect(result.current.hasError()).toBe(false);

    act(() => {
      result.current.handleInputChange('name', '');
    });

    expect(result.current.hasError()).toBe(true);
  });
});
