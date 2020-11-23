import EditTarget from './EditTarget'
import { render, fireEvent, getByTestId } from '@testing-library/react'

describe('EditTarget', () => {
    it('matches the snapshot when no props provided', () => {
        const { container } = render(<EditTarget />)
        expect(container).toMatchSnapshot()
    })
    it('handle Close Click is called correctly when Escape Button Clicked', () => {
        const setUpdateTargetClicked = jest.fn();
        const { getByTestId } = render(<EditTarget setUpdateTargetClicked={setUpdateTargetClicked}></EditTarget>)

        fireEvent.click(getByTestId("EscapeClick"))

        expect(setUpdateTargetClicked)
    })

    it('handleClick is called correctly when form submitted', () => {
        const handleUpdateTarget = jest.fn();
        const { getByTestId } = render(<EditTarget handleUpdateTarget={handleUpdateTarget}></EditTarget>)

        fireEvent.click(getByTestId("SubmitClick"))

        expect(handleUpdateTarget)
    })
})