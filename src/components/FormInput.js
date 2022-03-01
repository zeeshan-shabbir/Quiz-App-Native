import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import {COLORS} from '../theme/theme';
const FormInput = ({
  labelText = '',
  placeholderText = '',
  onChangeText = null,
  value = null,
  style,
  ...more
}) => {
  const [isActive, setActive] = useState(false)
  return (
    <View style={{width: '100%', marginBottom: 20}}>
      <Text>{labelText}</Text>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
          width: '100%',
          borderRadius: 5,
          marginTop: 10,
          borderColor: isActive ? COLORS.primary : COLORS.black + '50',
          ...style,
        }}
        caretHidden={false}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        onFocus={() => setActive(true)} 
        onBlur={() => setActive(false)}
        value={value}
        {...more}
      />
    </View>
  );
};

export default FormInput;
