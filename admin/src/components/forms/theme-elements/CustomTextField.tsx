import { InputHTMLAttributes, forwardRef } from 'react'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(
  ({ theme }) => ({
    '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '0.8'
    },
    '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '1'
    },
    '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[200]
    }
  })
)

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, ...rest }, ref) => {
    return (
      <input
        type={type || 'text'}
        name={name}
        // variant='outlined'
        placeholder='Enter your password'
        // fullWidth
        {...rest}
        ref={ref}
      />
    )
  }
)

Input.displayName = 'Input'

export default CustomTextField
