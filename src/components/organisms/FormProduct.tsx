import {Text, ScrollView} from 'react-native';
import React from 'react';
import Gap from '../atoms/Gap';
import InputField from '../molecules/InputFile';
import Button from '../atoms/Button';
import {FormFields} from '../../core/usecase/schemas/productSchema';

type Props = {
  handleButtonPress: () => Promise<void>;
  handleReset: () => void;
  form: FormFields;
  errors: FormFields;
  handleInputChange: (field: keyof FormFields, value: string) => void;
  type?: 'create' | 'update';
};

const FormProduct = ({
  form,
  errors,
  handleInputChange,
  handleReset,
  handleButtonPress,
  type = 'create',
}: Props) => {
  return (
    <ScrollView style={{paddingHorizontal: 15}}>
      <Gap height={20} />
      <Text style={{fontSize: 20, fontWeight: 700}}>
        {type === 'update'
          ? 'Formulario de Actualización'
          : 'Formulario de Registro'}
      </Text>
      <Gap height={10} />
      <InputField
        label="ID"
        value={form.id}
        onChangeText={value => handleInputChange('id', value)}
        errorMessage={errors.id}
        errorShow={!!errors.id}
        testID="input-id"
        disabled={type === 'update'}
      />
      <InputField
        label="Nombre"
        value={form.name}
        onChangeText={value => handleInputChange('name', value)}
        errorMessage={errors.name}
        errorShow={!!errors.name}
        testID="input-name"
      />
      <InputField
        label="Descripción"
        value={form.description}
        onChangeText={value => handleInputChange('description', value)}
        errorMessage={errors.description}
        errorShow={!!errors.description}
        testID="input-description"
      />
      <InputField
        label="Logo"
        value={form.logo}
        onChangeText={value => handleInputChange('logo', value)}
        errorMessage={errors.logo}
        errorShow={!!errors.logo}
        testID="input-logo"
      />
      <InputField
        label="Fecha de Liberación"
        value={form.date_release}
        onChangeText={value => handleInputChange('date_release', value)}
        errorMessage={errors.date_release}
        errorShow={!!errors.date_release}
        placeholder="DD/MM/YYYY"
        testID="input-date_release"
      />
      <InputField
        label="Fecha de Revisión"
        value={form.date_revision}
        onChangeText={value => handleInputChange('date_revision', value)}
        errorMessage={errors.date_revision}
        errorShow={!!errors.date_revision}
        placeholder="DD-MM-YYYY"
        disabled={true}
        testID="input-date_revision"
      />
      <Gap height={15} />
      <Button label="Eviar" onPress={handleButtonPress} />
      {type === 'create' && (
        <>
          <Gap height={10} />
          <Button
            label="Reiniciar"
            onPress={handleReset}
            styles={{backgroundColor: '#DCE1EB'}}
          />
        </>
      )}
      <Gap height={30} />
    </ScrollView>
  );
};

export default FormProduct;
