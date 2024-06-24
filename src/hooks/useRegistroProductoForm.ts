import {useCallback, useState} from 'react';
import {verifyProductById} from '../services/productServices/verify';
import { FormFields, productSchema } from '../core/usecase/schemas/productSchema';
import { transformObject } from '../adapters/transformObject';
import { ProductinitialValues } from '../core/constants/productsInitial';
import { addOneYearAndFormat, formatDate, parseDate } from '../utils/formatDate';




const useRegistroProductoForm = () => {
  const [form, setForm] =  useState<FormFields>({...ProductinitialValues});

  const [errors, setErrors] =  useState<FormFields>({...ProductinitialValues});

  
  const checkIdExists = useCallback(async (id: string) => {
    if (id === '') return;

    try {
      const exists = await verifyProductById(id);
      setErrors(prevErrors => ({
        ...prevErrors,
        id: exists ? 'El ID ya existe' : '',
      }));
    } catch {
      setErrors(prevErrors => ({
        ...prevErrors,
        id: 'El ID no pudo ser verificado',
      }));
    }
  }, []);



  const validateField = useCallback(async (field: keyof FormFields, value: string) => {
    const fieldSchema = productSchema.shape[field];
    
    if (field === 'date_revision' && form.date_release) {
      const fechaLiberacion = parseDate(form.date_release);
      const fechaRevision = parseDate(value);
      const oneYearLater = new Date(fechaLiberacion);
      oneYearLater.setFullYear(fechaLiberacion.getFullYear() + 1);

      if (fechaRevision.getTime() !== oneYearLater.getTime()) {
        setErrors(prevErrors => ({
          ...prevErrors,
          date_revision: 'La fecha de revisión debe ser exactamente un año posterior a la fecha de liberación',
        }));
        return;
      }
    }

    const result = fieldSchema.safeParse(value);
    if(field === 'date_release' && result.success){
        setForm(prevForm => ({
          ...prevForm,
          date_revision:addOneYearAndFormat(parseDate(prevForm.date_release)) ,
        }));
        return;
      
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: result.success ? '' : result.error.errors[0].message,
    }));
  }, [form.date_release]);

  const validate = useCallback((): boolean => {
    const result = productSchema.safeParse(form);
    if (result.success) {
      setErrors(ProductinitialValues);
      return true;
    } else {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(transformObject(fieldErrors) as FormFields);
      return false;
    }
  }, [form,setErrors]);

  const hasError = useCallback((): boolean => {
    return Object.values(errors).some(error => !!error);
  }, [errors]);

  const handleInputChange = useCallback((field: keyof FormFields, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
    validateField(field, value);
  }, [validateField]);

  const handleReset = useCallback(() => {
    setForm(ProductinitialValues);
    setErrors(ProductinitialValues);
  }, []);

  return {
    form,
    errors,
    handleInputChange,
    handleReset,
    checkIdExists,
    hasError,
    validate,
    setForm

  };
};

export default useRegistroProductoForm;
