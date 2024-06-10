import { TextField, TextFieldVariants } from '@mui/material'
import theme from '@/theme/theme'
import { HTMLInputTypeAttribute } from 'react'

interface Props {
  variant?: TextFieldVariants
  type?: HTMLInputTypeAttribute
  placeholder?: string | undefined
  fullWidth?: boolean | undefined
}
const CustomInput = ({ variant, placeholder, fullWidth, type }: Props) => {
  return (
    <TextField
      sx={{
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
      }}
      variant={variant}
      type={type || 'text'}
      placeholder={placeholder}
      fullWidth={fullWidth}
    />
  )
}
export default CustomInput
