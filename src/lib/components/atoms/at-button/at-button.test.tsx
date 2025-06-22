import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AtButton } from './index'

describe('atoms/at-button', () => {
  it('should render', async () => {
    const label = 'test button'
    render(<AtButton label={label} />)
    expect(screen.getByText(label)).toBeDefined()
  })
})
