import React from 'react'
import Input from './Input'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Input Render Tests', () => {
    const props = {
        value: 'this is a name value',
        label: 'name',
        text: "Enter Name",
        type: 'text',
        placeholder: 'name placeholder',
        handler: jest.fn()
    }
    it('renders an input with props', () => {
        render(<Input {...props} />)
        expect(screen.getByText(props.text)).toBeTruthy()
        expect(screen.getByDisplayValue(props.value)).toBeTruthy()
        expect(screen.getByPlaceholderText(props.placeholder)).toBeTruthy()
    })
    it('renders label string for text when text is not provided', () => {
        render(<Input {...props} text={''} />)
        expect(screen.getByLabelText(props.label)).toBeTruthy()
    })
    it('fires event handler', () => {
        render(<Input {...props} />)
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 1 } })
        expect(props.handler).toHaveBeenCalledTimes(1)
    })
})