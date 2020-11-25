import { render, screen, fireEvent } from '@testing-library/react';
import ProgressBar from './ProgressBar'

describe('Progress bar', () => {
  test('shows progress goal', () => {
    const progress = render(<div className="containerStyles">
      <div className="fillerStyles" style="height: 100%">
        <span className="labelStyles">{"50 %"}</span>
      </div>
    </div>)
    expect(progress).toMatchSnopshot()
  })
})