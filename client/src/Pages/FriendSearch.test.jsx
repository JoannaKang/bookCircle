import FriendSearch from './FriendSearch'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import { searchFriend } from '../ApiService/serverApiService'

describe('FriendSearch', () => {

    const user = {
        "books": [],
        "friends": [],
        "pendingFriends": [],
        "name": "Sooyeon",
        "password": "abc",
        "yearlyTarget": 7,
        "activityLog": [],
    }

    it('matches the snapshot when user is provided', () => {
        const { container } = render(<FriendSearch user={user}/>)
        expect(container).toMatchSnapshot()
    })

    it('Matches Snapshot when search button is Clicked and searchFriend Function is triggered', () => {
        const searchFriend = jest.fn();
        const handleAddFriend = jest.fn();
        const { getByTestId } = render(<FriendSearch user={user} handleAddFriend={handleAddFriend}/>);
        fireEvent.click(getByTestId("searchClick"));
        const { container } = render(<FriendSearch user={user} handleAddFriend={handleAddFriend}/>);
        expect(container).toMatchSnapshot();
        expect(searchFriend);
    })

})