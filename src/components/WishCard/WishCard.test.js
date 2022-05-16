import React from 'react'
import { render } from "@testing-library/react"
import WishCard from './WishCard'

test("Card Title render", async () => {
    const cardtitle = "Family"
    const cardDescription = "Card description"
    const cardButton = "Libros"
    const { findAllByRole } = render(
        <WishCard
            title={cardtitle}
            description={cardDescription}
            tagbutton={cardButton}
        />)
    const CardTitleComponent = await findAllByRole("heading")
    const CardDescriptionComponent = await findAllByRole("heading")
    const CardButtonComponent = await findAllByRole("button")
    expect(CardTitleComponent[0]).toHaveTextContent(cardtitle)
    expect(CardDescriptionComponent[1]).toHaveTextContent(cardDescription)
    expect(CardButtonComponent[0]).toHaveTextContent(cardButton)
})