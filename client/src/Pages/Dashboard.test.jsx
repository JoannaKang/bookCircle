import Dashboard  from './Dashboard'
import { render, fireEvent, getByTestId } from '@testing-library/react'

describe('Dashboard', () => {

    const user = {
        "books": [],
        "friends": [],
        "pendingFriends": [],
        "name": "Sooyeon",
        "_id": "5fbbdb74734d416db0a6a6d4",
        "password": "abc",
        "yearlyTarget": 7,
        "activityLog": [],
    }

    const userWithActivity = {
        "books": [],
        "friends": [],
        "pendingFriends": [],
        "name": "Sooyeon",
        "_id": "5fbbdb74734d416db0a6a6d4",
        "password": "abc",
        "yearlyTarget": 7,
        "activityLog": [{"_id": "mockID"}, {"_id": "mockID2"}],
    }

    it('matches the snapshot user is provided', () => {
        const { container } = render(<Dashboard user={user} />)
        expect(container).toMatchSnapshot()
    })

    it('matches the snapshot user with Activity is provided', () => {
        const { container } = render(<Dashboard user={userWithActivity} />)
        expect(container).toMatchSnapshot()
    })

    it('Yearly Target is updated when edit button is clicked and matches Snapshot', () => {
        const updateYearlyTarget = jest.fn();
        const { getByTestId, container } = render(<Dashboard user={userWithActivity} updateYearlyTarget={updateYearlyTarget}></Dashboard>)
        fireEvent.click(getByTestId("EditButtonClick"))
        expect(container).toMatchSnapshot();
        expect(updateYearlyTarget)
    })

})