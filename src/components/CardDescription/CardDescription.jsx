import PropTypes from "prop-types"
import "typeface-roboto"
import { Typography } from "@mui/material"

const CardDescription = ({ description }) => {
    return (
        <>
            <Typography display="inline" variant="h5"> {description} </Typography>
        </>
    )
}

CardDescription.propTypes = {
    description: PropTypes.string.isRequired
}

export default CardDescription