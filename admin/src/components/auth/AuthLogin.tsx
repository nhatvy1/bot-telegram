import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import Link from 'next/link'
import CustomTextField from '@/components/forms/theme-elements/CustomTextField'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { login } from '@/app/actions/login'

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
  } = useForm<any>()

  const onSubmit: SubmitHandler<any> = async(data: any)=> {
    try {
      const res = await login(data)
      console.log('Check res: ', res)
    } catch(e) {
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

      <Stack component='form'>
        <Box>
          <Typography
            variant='subtitle1'
            fontWeight={600}
            component='label'
            htmlFor='username'
            mb='5px'
          >
            Username
          </Typography>
          <CustomTextField
            variant='outlined'
            fullWidth
            placeholder='Enter your username'
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
          <CustomTextField
            type='password'
            variant='outlined'
            placeholder='Enter your password'
            fullWidth
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
