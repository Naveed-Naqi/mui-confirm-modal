# mui-confirm-modal

> A simple util that easily allows us to display confirmation modals for certain actions. Based on react-confirm and material-ui

[![NPM](https://img.shields.io/npm/v/mui-confirm-modal.svg)](https://www.npmjs.com/package/mui-confirm-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-confirm-modal
```

## Demo

# Confirm

This utility allows the dev to easily implement confirmation modals for any action. This works well with nesting modals as well.

## title (String) [Optional]

The title of the modal. The title is 'Confirmation' by default.

## message (string) [Required]

The message displayed in the modal

# Example

```js
import React from 'react'
import Button from '@material-ui/core/Button'
import { confirm } from './confirm'

export default function ConfirmModalTemplateExample() {
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
```

## License

MIT © [Naveed-Naqi](https://github.com/Naveed-Naqi)
