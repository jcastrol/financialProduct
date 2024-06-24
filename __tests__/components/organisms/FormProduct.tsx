// FormProduct.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FormProduct from '../../../src/components/organisms/FormProduct'; // Ajusta la ruta según tu estructura de archivos
import {FormFields} from '../../../src/core/usecase/schemas/productSchema';

describe('FormProduct Component', () => {
  const mockHandleButtonPress = jest.fn();
  const mockHandleReset = jest.fn();
  const mockHandleInputChange = jest.fn();

  const initialForm: FormFields = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  };

  const initialErrors: FormFields = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  };
  const formwithdata: FormFields = {
    date_release: '2025-01-22',
    date_revision: '2026-01-22',
    description: 'Eggrege gergr',
    id: 'test1',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    name: 'Test01',
  };

  it('renders correctly for create type', () => {
    const {getByText, getByTestId} = render(
      <FormProduct
        form={initialForm}
        errors={initialErrors}
        handleInputChange={mockHandleInputChange}
        handleReset={mockHandleReset}
        handleButtonPress={mockHandleButtonPress}
        type="create"
      />,
    );

    // Verificar que el texto del título es correcto
    expect(getByText('Formulario de Registro')).toBeTruthy();

    // Verificar que todos los campos de entrada se renderizan
    expect(getByTestId('input-id')).toBeTruthy();
    expect(getByTestId('input-name')).toBeTruthy();
    expect(getByTestId('input-description')).toBeTruthy();
    expect(getByTestId('input-logo')).toBeTruthy();
    expect(getByTestId('input-date_release')).toBeTruthy();
    expect(getByTestId('input-date_revision')).toBeTruthy();
  });

  it('renders correctly for update type', () => {
    const {getByText, getByTestId} = render(
      <FormProduct
        form={initialForm}
        errors={initialErrors}
        handleInputChange={mockHandleInputChange}
        handleReset={mockHandleReset}
        handleButtonPress={mockHandleButtonPress}
        type="update"
      />,
    );

    // Verificar que el texto del título es correcto
    expect(getByText('Formulario de Actualización')).toBeTruthy();

    // Verificar que todos los campos de entrada se renderizan
    expect(getByTestId('input-id')).toBeTruthy();
    expect(getByTestId('input-name')).toBeTruthy();
    expect(getByTestId('input-description')).toBeTruthy();
    expect(getByTestId('input-logo')).toBeTruthy();
    expect(getByTestId('input-date_release')).toBeTruthy();
    expect(getByTestId('input-date_revision')).toBeTruthy();
  });

  it('calls handleInputChange when text changes', () => {
    const {getByTestId} = render(
      <FormProduct
        form={initialForm}
        errors={initialErrors}
        handleInputChange={mockHandleInputChange}
        handleReset={mockHandleReset}
        handleButtonPress={mockHandleButtonPress}
        type="create"
      />,
    );

    const inputName = getByTestId('input-name');
    fireEvent.changeText(inputName, 'new name');

    // Verificar que la función handleInputChange se llama con el nuevo texto
    expect(mockHandleInputChange).toHaveBeenCalledWith('name', 'new name');
  });

  it('calls handleButtonPress when the submit button is pressed', () => {
    const {getByText} = render(
      <FormProduct
        form={initialForm}
        errors={initialErrors}
        handleInputChange={mockHandleInputChange}
        handleReset={mockHandleReset}
        handleButtonPress={mockHandleButtonPress}
        type="create"
      />,
    );

    const submitButton = getByText('Eviar');
    fireEvent.press(submitButton);

    // Verificar que la función handleButtonPress se llama cuando se presiona el botón
    expect(mockHandleButtonPress).toHaveBeenCalled();
  });

  it('calls handleReset when the reset button is pressed', () => {
    const {getByText} = render(
      <FormProduct
        form={initialForm}
        errors={initialErrors}
        handleInputChange={mockHandleInputChange}
        handleReset={mockHandleReset}
        handleButtonPress={mockHandleButtonPress}
        type="create"
      />,
    );

    const resetButton = getByText('Reiniciar');
    fireEvent.press(resetButton);

    // Verificar que la función handleReset se llama cuando se presiona el botón de reiniciar
    expect(mockHandleReset).toHaveBeenCalled();
  });

  it('disables the ID input field for update type', () => {
    const formWithId: FormFields = {
      ...initialForm,
      id: '123',
    };

    const {getByTestId} = render(
      <FormProduct
        form={formWithId}
        errors={initialErrors}
        handleInputChange={mockHandleInputChange}
        handleReset={mockHandleReset}
        handleButtonPress={mockHandleButtonPress}
        type="update"
      />,
    );

    const inputId = getByTestId('input-id');

    // Verificar que el campo de entrada ID está deshabilitado
    expect(inputId.props.editable).toBe(false);
  });
  it('show correctly all Imputs', () => {
    

    const {queryByTestId} = render(
      <FormProduct
        form={formwithdata}
        errors={initialErrors}
        handleInputChange={mockHandleInputChange}
        handleReset={mockHandleReset}
        handleButtonPress={mockHandleButtonPress}
        type="update"
      />,
    );

    expect(queryByTestId("input-id")?.props.value).toEqual(formwithdata.id);
    expect(queryByTestId("input-name")?.props.value).toEqual(formwithdata.name);
    expect(queryByTestId("input-description")?.props.value).toEqual(formwithdata.description);
    expect(queryByTestId("input-date_release")?.props.value).toEqual(formwithdata.date_release);
    expect(queryByTestId("input-date_revision")?.props.value).toEqual(formwithdata.date_revision);
    expect(queryByTestId("input-logo")?.props.value).toEqual(formwithdata.logo);
  });
});
