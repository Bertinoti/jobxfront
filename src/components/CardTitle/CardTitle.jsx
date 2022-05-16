import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import "typeface-roboto"

const CardTitle = ({title}) => {
    return (
        <>
            <Typography variant='h4'> {title}  </Typography>
        </>
    )
}

CardTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default CardTitle