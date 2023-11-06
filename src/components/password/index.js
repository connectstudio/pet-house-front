import React, { useState } from 'react'
import {  TextInput, TouchableOpacity, View } from 'react-native'
import { Controller } from 'react-hook-form'
import { defaultInput } from '../../../globals.styles'

function Password({
    placeholder,
    control,
    name,
    style,
    disable,
    password,
    defaultValue,
    font,
    field
}) {

    const [passwordIsVisible, setPasswordIsVisible] = useState(false)

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
                        placeholder={placeholder}
                        secureTextEntry={password && !passwordIsVisible}>
                    </TextInput>
                    {
                        !passwordIsVisible ?
                            <TouchableOpacity onPress={() => setPasswordIsVisible(true)}>
                                {password.icon}
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setPasswordIsVisible(false)}>
                                {password.iconDisable}
                            </TouchableOpacity>
                    }
                </View>
            )}
        />
    )
}

export default Password