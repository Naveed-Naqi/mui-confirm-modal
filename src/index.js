import React from 'react'
import { createConfirmation, confirmable } from 'react-confirm'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'

const MyDialog = ({ title, show, proceed, message }) => {
  return (
    <Dialog open={show} onClose={() => proceed(false)}>
      <DialogTitle>{title || 'Confirmation'}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => proceed(false)}
          color='secondary'
          variant='contained'
        >
          No
        </Button>
        <Button
          onClick={() => proceed(true)}
          color='primary'
          variant='contained'
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export const confirm = createConfirmation(confirmable(MyDialog))
