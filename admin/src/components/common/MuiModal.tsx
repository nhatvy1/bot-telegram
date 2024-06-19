import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  overflow: 'hidden',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4
}

interface Props {
  open: boolean
  closeModal: () => void
  title?: string
  children?: ReactNode
  className?: { [key: string]: string | number }
}

const MuiModal = ({ open, closeModal, title, children, className }: Props) => {
  return (
    <Modal
      open={open}
      onClose={() => closeModal()}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={{ ...style, ...className }}>
        {title && (
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Modal>
  )
}

export default MuiModal
