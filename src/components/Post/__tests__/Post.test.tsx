import { render, screen } from "@testing-library/react"
import Post from "../"

describe("For Post component", () => {
    it("Deve renderizar o componente", () => {
        render(<Post children={undefined} imageUrl={""} />)
        expect(screen.getByTestId("post-component")).toBeInTheDocument()
    })
})

