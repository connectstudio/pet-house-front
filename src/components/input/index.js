import React from 'react'
import { TextInput, View } from 'react-native'
import { Controller } from 'react-hook-form'
import { defaultInput } from '../../../globals.styles'

function Input({
  placeholder,
  style,
  disable,
  defaultValue,
  font,
  field,
  name,
  control
}) {

  return (
    <Controller
      defaultValue=""
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={[defaultInput.root, style]}>
          <TextInput
            {...field}
            defaultValue={defaultValue}
            editable={!disable}
            placeholderTextColor={font.color}
            style={[defaultInput.container, { color: font.color, fontSize: font.size }]}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}>
          </TextInput>
        </View>
      )}
    />
  )}

      
export default Input
