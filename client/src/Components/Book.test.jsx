import BookDisplay from './Book'
import {render, fireEvent} from '@testing-library/react'

describe('BookDisplay', () => {
  it('matches the snapshot when a book prop is provided', () => {
    const {container} = render(<BookDisplay book={{imageUrl: 'hello-img.jpg', title: 'Harry Potter and the Philosopher\'s Stone', star: true}}/>)
    expect(container).toMatchSnapshot()
  })
  it('handleClick is called when image is clicked', () => {
    const handleClick = jest.fn();
    const book = {imageUrl: 'hello-img.jpg', title: 'Harry Potter and the Philosopher\'s Stone', star: true}
    const {getByAltText} = render(<BookDisplay handleBookClicked={handleClick} book={book}/>)

    fireEvent.click(getByAltText(`${book.title} book cover`))

    expect(handleClick).toHaveBeenCalledWith(book)
  })
})

