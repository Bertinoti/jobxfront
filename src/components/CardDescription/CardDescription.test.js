import { render } from "@testing-library/react"
import CardDescription from './CardDescription'

test("Card Description render", async () => {
    const carddescription = "this is a description"
    const { findAllByRole } = render(<CardDescription description={carddescription} />)
    const CardDescriptionComponent = await findAllByRole("heading")
    expect(CardDescriptionComponent[0]).toHaveTextContent(carddescription)
})