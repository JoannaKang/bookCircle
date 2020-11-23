import MessageDisplay from './Message'
import { render, fireEvent, getByTestId } from '@testing-library/react'

describe('Message', () => {
    it('matches snapshot when type friendRequest is provided', () => {
        const { container } = render(<MessageDisplay activity={{message: "hello", type: "friendRequest"}}   />)
        expect(container).toMatchSnapshot()
    })
    it('matches snapshot when type bookRequest is provided', () => {
        const { container } = render(<MessageDisplay activity={{message: "goodbye", type: "bookRequest"}}   />)
        expect(container).toMatchSnapshot()
    })
    it('matches snapshot when type resolved is provided', () => {
        const { container } = render(<MessageDisplay activity={{message: "hello Again", type: "resolved"}}   />)
        expect(container).toMatchSnapshot()
    })

    it('handleClick is called correctly when Accept Friend Request Button is clicked', () => {
        const confirmFriend = jest.fn();
        const activity = { message: "hello", type: "friendRequest"};
        const { getByTestId } = render(<MessageDisplay activity={activity} confirmFriend={confirmFriend} ></MessageDisplay>)

        fireEvent.click(getByTestId("friendRequestAccept"))

        expect(confirmFriend).toHaveBeenCalledWith(activity)
    })

    it('handleClick is called correctly when Reject Friend Request Button is clicked', () => {
        const rejectFriendRequest = jest.fn();
        const activity = { message: "hello", type: "friendRequest"};
        const { getByTestId } = render(<MessageDisplay activity={activity} rejectFriendRequest={rejectFriendRequest} ></MessageDisplay>)

        fireEvent.click(getByTestId("friendRequestReject"))

        expect(rejectFriendRequest).toHaveBeenCalledWith(activity)
    })
    it('handleClick is called correctly when Accept Book Request Button is clicked', () => {
        const confirmBookReq = jest.fn();
        const activity = { message: "hello", type: "bookRequest"};
        const { getByTestId } = render(<MessageDisplay activity={activity} confirmBookReq={confirmBookReq} ></MessageDisplay>)

        fireEvent.click(getByTestId("friendRequestAcceptBook"))

        expect(confirmBookReq).toHaveBeenCalledWith(activity)
    })
    it('handleClick is called correctly when Reject Book Request Button is clicked', () => {
        const rejectBookReq = jest.fn();
        const activity = { message: "hello", type: "bookRequest"};
        const { getByTestId } = render(<MessageDisplay activity={activity} rejectBookReq={rejectBookReq} ></MessageDisplay>)

        fireEvent.click(getByTestId("friendRequestRejectBook"))

        expect(rejectBookReq).toHaveBeenCalledWith(activity)
    })
    
    it('handleClick is called correctly when Remove Message Button is clicked', () => {
        const removeMessage = jest.fn();
        const activity = { message: "hello", type: "resolved"};
        const { getByTestId } = render(<MessageDisplay activity={activity} removeMessage={removeMessage} ></MessageDisplay>)

        fireEvent.click(getByTestId("resolvedBtnRejectTest"))

        expect(removeMessage).toHaveBeenCalledWith(activity)
    })
    
    
})

