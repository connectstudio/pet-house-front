import React, { useContext, useState } from 'react'
import Input from '../../components/input/index'
import { LinearGradient } from 'expo-linear-gradient'
import Password from '../../components/password/index'
import { useForm } from 'react-hook-form'
import { colors, defaultStyles, fontSize, theme } from '../../../globals.styles'
import { SafeAreaView, StyleSheet, View, Text} from 'react-native'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Feather } from '@expo/vector-icons'
import Button from '../../components/buttom/index'

function Login({ navigation }) {

  const schema = z.object({
    email: z.string().nonempty('Campos a preencher').email('Email inválido'),
    password: z.string().nonempty('Campos a preencher')
  })

  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(schema)
  })

  const [loading, setLoading] = useState(false)

  function handleLogin(data) {
    setLoading(true)
  }

  return (
    <LinearGradient 
      colors={[theme.primary, theme.primaryGradient]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={defaultStyles.safeAreaView}
    >
      <View style={styles.Header}  >
        <Text style={styles.Title}>Fido</Text>
      </View>
      <View style={[defaultStyles.form,styles.Form]} >
        {Object.values(errors)[0]?.message !== undefined &&
          <P style={defaultStyles.errorMessage}>{Object.values(errors)[0]?.message}</P>
        }
        <Input
          placeholder="E-mail"
          control={control}
          name="email"
          font={{
            color: theme.primaryText,
            size: fontSize.small
          }}
          style={defaultStyles.input}
        />
        <Password
          placeholder="Senha"
          font={{
            color: theme.primaryText,
            size: fontSize.small
          }}
          control={control}
          name="password"
          style={defaultStyles.input}
          password={{
            iconDisable: <Feather name={'eye'} color={theme.primaryText} size={20}></Feather>,
            icon: <Feather name={'eye-off'} color={theme.primaryText} size={20}></Feather>
          }}
        />
        <View style={defaultStyles.switch}>
          <Button
            onClick={handleSubmit(handleLogin)}
            loading={loading}
            font={{
              size: fontSize.small,
              color: theme.secondaryText
            }}
            style={defaultStyles.button}
            gradientColors={[theme.primary, theme.primaryGradient]}>
            Entrar
          </Button>
        </View>
          <View style={styles.Footer}>
          <Text style={{ color: theme.primaryText }}> Não possui uma conta? </Text>
          <Text style={{ color: theme.primary }} onClick={() => navigation.push('CreateAccount')}>Cadastre-se</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  Header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    minHeight: 150,
  },
  Title: {
    fontSize: fontSize.large,
    color: colors.zinc[0],
    textAlign: 'center',
    marginLeft: 10
  },
  Footer: {
    paddingVertical: 20,
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: colors.zinc[300]
  },
  Form: {
    margin:20,
    paddingTop: 25,
    padding:0,
    borderRadius:8,
    backgroundColor:"white"
  }
})

export default Login
