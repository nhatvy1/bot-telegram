import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { login } from '@/app/actions/login'
import { ErrorMessage } from '@hookform/error-message'

interface loginType {
  title?: string
  subtitle?: JSX.Element | JSX.Element[]
  subtext?: JSX.Element | JSX.Element[]
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [loading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>()

  const onSubmit: SubmitHandler<ILogin> = async (data: ILogin) => {
    try {
      console.log('Check data: ', data)
      // const res = await login(data)
      // console.log('Check res: ', res)
    } catch (e) {
      toast.error('Login failed')
    } finally {
      setIsLoading(true)
    }
  }

  return (
    <>
      {title ? (
        <Typography fontWeight='700' variant='h2' mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack component='form' onSubmit={handleSubmit(onSubmit)} method='POST'>
        <Box>
          <Typography
            variant='subtitle1'
            fontWeight={600}
            component='label'
            htmlFor='email'
            mb='5px'
          >
            Email
          </Typography>
          <TextField
            variant='outlined'
            fullWidth
            placeholder='Enter your email address'
            {...register('email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invaid email address'
              },
              required: {
                value: true,
                message: 'Please enter your email address'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => (
              <Typography component='span' style={{ color: 'red' }}>
                {message}
              </Typography>
            )}
          />
        </Box>
        <Box mt='25px'>
          <Typography
            variant='subtitle1'
            fontWeight={600}
            component='label'
            htmlFor='password'
            mb='5px'
          >
            Password
          </Typography>
          <TextField
            type='password'
            variant='outlined'
            placeholder='Enter your password'
            fullWidth
            {...register('password', {
              required: {
                value: true,
                message: 'Please enter your password'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => (
              <Typography component='span' style={{ color: 'red' }}>
                {message}
              </Typography>
            )}
          />
        </Box>
        <Stack
          justifyContent='space-between'
          direction='row'
          alignItems='center'
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='Remeber this Device'
            />
          </FormGroup>
          <Typography
            component={Link}
            href='/'
            fontWeight='500'
            sx={{
              textDecoration: 'none',
              color: 'primary.main'
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
        <Box>
          <Button
            color='primary'
            variant='contained'
            size='large'
            fullWidth
            type='submit'
          >
            Login
          </Button>
        </Box>
      </Stack>
      {subtitle}
    </>
  )
}

export default AuthLogin
