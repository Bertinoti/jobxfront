import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import CardTitle from '../CardTitle/CardTitle'
import CardDescription from '../CardDescription/CardDescription'
import { CardActions } from '@mui/material'
import CardTag from '../CardTags/CardTag'

const WishCard = ({ title, description, tagbutton, handleTag, bgImg }) => {
    return (
        <Card
            sx={{
                minWidth:300,
                minHeight:200,
                mx: 8,
                my: 2,
                display: "flex",
                flexDirection: "column",
                borderRadius: 5,
                borderColor: "#343434",
                borderStyle: "solid",
                borderWidth: 2,
                backgroundImage: { bgImg }
            }}
        >
            <CardContent>
                <CardTitle title={title} />
                <CardDescription description={description} />
            </CardContent>
            <CardActions>
                {
                    (tagbutton.length >1 )? tagbutton.map((tag) => {
                        return(
                                <CardTag buttonTag={tag} />
                            )
                    }): <CardTag buttonTag={tagbutton} />
                }
            </CardActions>
        </Card>
    )
}

WishCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tagbutton: PropTypes.string.isRequired
}

export default WishCard