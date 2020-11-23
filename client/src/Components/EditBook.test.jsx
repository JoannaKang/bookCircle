import EditBook from './EditBook'
import { render, fireEvent, getByTestId } from '@testing-library/react'
describe('EditBook', () => {

    const book = {
        title: "Lord of the Rings",
        authors: "Tolkien",
        imageUrl: undefined,
        dateRead: undefined,
        review: undefined,
        availableToBorrow: "star",
        genre: "fiction",
        star: "star",
    }

    it('matches snapshot when no book is provided', () => {
        const { container } = render(<EditBook></EditBook>)
        expect(container).toMatchSnapshot()
    })

    it('matches snapshot when book is provided', () => {
        const { container } = render(<EditBook book={book}></EditBook>)
        expect(container).toMatchSnapshot()
    })

    it('handleDelete is called correctly when Delete Button is clicked', () => {
        const deleteFunc = jest.fn();
        const { getByTestId } = render(<EditBook book={book} deleteFunc={deleteFunc} ></EditBook>)

        fireEvent.click(getByTestId("deleteClick"))
        expect(deleteFunc)
    })

})

