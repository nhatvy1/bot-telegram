import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Link from 'next/link'

import { Stack } from '@mui/system'
import CustomTextField from '@/components/forms/theme-elements/CustomTextField'

interface registerType {
  title?: string
  subtitle?: JSX.Element | JSX.Element[]
  subtext?: JSX.Element | JSX.Element[]
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => (
  <>
    {title ? (
      <Typography fontWeight='700' variant='h2' mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Box>
      <Stack mb={3}>
        <Typography
          variant='subtitle1'
          fontWeight={600}
          component='label'
          htmlFor='name'
          mb='5px'
        >
          Fullname
        </Typography>
        <CustomTextField
          id='name'
          variant='outlined'
          placeholder='Enter your fullname'
          fullWidth
        />

        <Typography
          variant='subtitle1'
          fontWeight={600}
          component='label'
          htmlFor='email'
          mb='5px'
          mt='25px'
        >
          Email address
        </Typography>
        <CustomTextField
          id='email'
          variant='outlined'
          placeholder='Enter your email address'
          fullWidth
        />

        <Typography
          variant='subtitle1'
          fontWeight={600}
          component='label'
          htmlFor='password'
          mb='5px'
          mt='25px'
        >
          Password
        </Typography>
        <CustomTextField
          id='password'
          variant='outlined'
          placeholder='Enter your password'
          fullWidth
        />
        <Typography
          variant='subtitle1'
          fontWeight={600}
          component='label'
          htmlFor='password'
          mb='5px'
          mt='25px'
        >
          Confirm password
        </Typography>
        <CustomTextField
          id='password'
          variant='outlined'
          placeholder='Enter your confirm password'
          fullWidth
        />
      </Stack>
      <Button
        color='primary'
        variant='contained'
        size='large'
        fullWidth
        component={Link}
        href='/authentication/login'
      >
        Register
      </Button>
    </Box>
    {subtitle}
  </>
)

export default AuthRegister
