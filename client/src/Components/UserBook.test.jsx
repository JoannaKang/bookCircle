import UserBook from './UserBook';
import EditBook from '../Components/EditBook'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import Book from '../Interfaces'
import React, { useState } from 'react';
import { Simulate } from 'react-dom/test-utils';


const mockBook = () => {
  const mockup = {}
  mockup.title = "Harry potter";
  mockup.authors = ["JK rowling"];
  mockup.dateRead = "2020-11-11";
  mockup.review = "fucking awesome";
  mockup.availableToBorrow = true;
  mockup.genre = "Fiction";
  mockup.star = true;

  return mockup;
}

const mockUser = () => {
  const mockup = {}
  mockup.books = [];
  mockup.friends = [];
  mockup._id = 'asdfjaksdjfkal1';
  mockup.name = 'json';
  mockup.password = 'asdf';
  mockup.activityLog = [{}];
  mockup.yearlyTarget = '20';

  return mockup;
}

describe('Edit book', () => {
  it('matches the snapshot when a book prop is provided', () => {
    const bookInfo = { review: 'asdf', genre: 'fiction' }
    const { container } = render(<EditBook book={bookInfo} />)
    expect(container).toMatchSnapshot()
  })

  test('Edit popup opened correctly', () => {
    const { container } = render(<EditBook />);
    // const { container } = render(<div class='EditBookPopOutDiv' ></div>);
    expect(container.firstChild).toHaveClass('EditBookPopOutDiv');
  })


  //FIXME: How to test click event?????
  it('handleClick is called when edit button is clicked', () => {

    const Userbookprops = render(<UserBook clickedBook={mockBook()} user={mockUser()} />);
    const button = Userbookprops.getByText('edit');
    Simulate.click(button);


    expect(screen.getByTestId('editbook')).toBeDefined();


  })
})

