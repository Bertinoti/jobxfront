import React from 'react'
import { render } from "@testing-library/react"
import CardTag from './CardTag'


test("Button Tag  render", async () => {
    const cardTag = ["libros"]
    const { findAllByRole } = render(<CardTag buttonTag={ cardTag } />)
    const buttontagComponent = await findAllByRole("button")
    expect(buttontagComponent[0]).toHaveTextContent(cardTag[0])
})