import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ReactPlayer from 'react-player';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 641,




};
const PromoModel = ({ handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ReactPlayer url='https://www.youtube.com/watch?v=r48lv0V6Pwg' />
      </Box>
    </Modal>
  )
}

export default PromoModel