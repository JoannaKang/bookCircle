import { render, fireEvent } from '@testing-library/react';
import Bookcase from './Bookcase';
import UserBook from '../Components/UserBook';


it('Edit popup opened correctly', () => {
  const handleClick = jest.fn();
  const clickedBook = { imageUrl: 'hello-img.jpg', title: 'Harry Potter and the Philosopher\'s Stone', star: true }
  const { bookinfo } = render(<UserBook />)


  expect(container).toMatchSnapshot();
});
