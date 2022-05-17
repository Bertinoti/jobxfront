import CardTitle from "./CardTitle"
import { render } from "@testing-library/react"

test("Card Title render", async () => {
    const cardtitle = "Family"
    const { findAllByRole } = render ( <CardTitle title={cardtitle} />)
    const CardTitleComponent = await findAllByRole("heading")
    expect(CardTitleComponent[0]).toHaveTextContent(cardtitle)
})