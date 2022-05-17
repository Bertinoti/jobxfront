import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const CardTag = ({ buttonTag, handleOnclick }) => {
  return (
    <Button
      onClick={handleOnclick}
      sx={{
        paddingX: 2,
        marginX: 2,
        backgroundColor: "green",
        color: "white",
        fontSize: 10,
        borderRadius: 8,
        ':hover': {
          transform: 'scale(1.2)',
          color: 'green',
          backgroundColor: 'lightgreen'
        }
      }}
    >
      {buttonTag}
    </Button>
  )
}

CardTag.propTypes = {
  buttonTag: PropTypes.array.isRequired,
}

export default CardTag