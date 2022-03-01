import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../theme/theme';

const FormButton = ({
  labelText = '',
  handleOnPress = null,
  style,
  fontsize,
  isPrimary = true,
  ...more
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        ...style,
      }}
      activeOpacity={0.5}
      onPress={handleOnPress}
      {...more}>
      <Text
        style={{
          textAlign: 'center',
          color: isPrimary ? COLORS.white : COLORS.primary,
          ...fontsize,
        }}>
        {labelText}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;
