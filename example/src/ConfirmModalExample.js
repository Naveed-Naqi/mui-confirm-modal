import React from 'react'
import Button from '@material-ui/core/Button'
import { confirm } from 'mui-confirm-modal'

export default function ConfirmModalExample() {
  const handleOnClick = async () => {
    if (
      await confirm({
        message: 'Do you really want to be batman?'
      })
    ) {
      console.log('yes')
    } else {
      console.log('no')
    }
  }

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleOnClick}>
        Open alert dialog
      </Button>
    </div>
  )
}
