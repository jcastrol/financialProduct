import {
  View,
  Text,
  TouchableOpacity,
  type GestureResponderEvent,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';

interface Button {
  label: string;
  icon?: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  fullWidth?: boolean;
  padding?: number;
  styles?: ViewStyle;
  color?: string;
}
const defaultStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFC300',
  padding: 12,
};

export default function Button({
  label,
  icon: Icon,
  onPress,
  color = '#000',
  styles = {},
}: Button) {
  const styleButton = StyleSheet.create({
    button: {
      ...defaultStyles,
      ...styles,
    },
    label: {fontWeight: '400', color: color},
  });
  return (
    <TouchableOpacity
      style={styleButton.button}
      activeOpacity={0.6}
      onPress={onPress} testID='button' >
      {Icon && (
        <View style={{marginRight: 8}} testID='icon-wrapper'>
          <Icon />
        </View>
      )}
      <Text style={styleButton.label}>{label}</Text>
    </TouchableOpacity>
  );
}
