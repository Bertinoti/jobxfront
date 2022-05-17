import { render } from "@testing-library/react"
import WishCard from "./WishCard"
import family from "../../assets/family.jpg"

test("Card Title render", async () => {
    const cardtitle = "Family"
    const cardDescription = "Card description"
    const cardButton = ["Libros"]
    const image = family
    const { findAllByRole } = render(
        <WishCard
            key={cardtitle}
            title={cardtitle}
            description={cardDescription}
            tagbutton={cardButton}
            bgImg={image}
        />)
    const CardTitleComponent = await findAllByRole("heading")
    const CardDescriptionComponent = await findAllByRole("heading")
    const CardButtonComponent = await findAllByRole("button")
    expect(CardTitleComponent[0]).toHaveTextContent(cardtitle)
    expect(CardDescriptionComponent[1]).toHaveTextContent(cardDescription)
    expect(CardButtonComponent[0]).toHaveTextContent(cardButton[0])
})
