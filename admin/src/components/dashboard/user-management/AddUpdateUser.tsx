import MuiModal from '@/components/common/MuiModal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify'

interface Props {
  open: boolean
  closeModal: () => void
  user: IUser | null
}

const AddUpdateUser = ({ open, closeModal, user }: Props) => {
  const [loading, setLoading] = useState(false)

  const theme = useTheme()

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<IUser>()

  setValue('email', user?.email || '')
  setValue('fullName', user?.fullName || '')

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      setLoading(true)
      console.log('Check data: ', data)
    } catch (e) {
      toast.error('Vui lòng thử  lại sau')
    } finally {
      setLoading(false)
    }
  }

  return (
    <MuiModal open={open} closeModal={closeModal} title='Cập nhật người dùng'>
      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            variant='outlined'
            fullWidth
            label='Email'
            disabled
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
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            variant='outlined'
            fullWidth
            label='Fullname'
            placeholder='Enter your fullname'
            {...register('fullName', {
              required: {
                value: true,
                message: 'Please enter your fullname'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name='fullName'
            render={({ message }) => (
              <Typography component='span' style={{ color: 'red' }}>
                {message}
              </Typography>
            )}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='demo-multiple-name-label'>Status</InputLabel>
            <Select
              labelId='my-select-label'
              label='Status'
              {...register('status', {
                required: {
                  value: true,
                  message: 'Please select a status'
                }
              })}
              defaultValue={user?.status}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
              <MenuItem value={-1}>Block</MenuItem>
            </Select>
            <ErrorMessage
              errors={errors}
              name='status'
              render={({ message }) => (
                <Typography component='span' style={{ color: 'red' }}>
                  {message}
                </Typography>
              )}
            />
          </FormControl>
        </Box>
        <Button
          sx={{
            p: '12px 20px',
            border: '1px solid lightgray',
            borderRadius: '8px',
            background: theme.palette.primary.main,
            color: 'white',
            '&.MuiButton-root:hover': {
              background: '#3399FF'
            }
          }}
          type='submit'
        >
          Update user
        </Button>
      </Box>
    </MuiModal>
  )
}

export default AddUpdateUser
