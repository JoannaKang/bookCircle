import Friend from './Friend'
import { render, fireEvent, getByTestId } from '@testing-library/react'

describe('Friend', () => {

    let name = "Edward"; 

    it('matches snapshot when friendID is provided', () => {
        const { container } = render(<Friend friendId={name}></Friend>)
        expect(container).toMatchSnapshot()
    });
    
    it('HandleClick called when Friend Button is clicked', () => {
        const getSelectedFriend = jest.fn();
        const { getByTestId } = render(<Friend friendId={name} getSelectedFriend={getSelectedFriend}></Friend>)
  
        fireEvent.click(getByTestId("friendButtonClick"))
        expect(getSelectedFriend)

    });

})

