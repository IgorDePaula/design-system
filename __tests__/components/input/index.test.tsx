import {render, screen} from '@testing-library/react'
import Input from "@components/input";
import React from 'react';

describe('input', () => {

    it('renders snapshot', () => {
        const {container} = render(<Input id='login' label='login' name='login' type='text'/>)
        expect(container).toMatchSnapshot()
    })

    it('renders a input', async () => {
        const {findByTestId} = render(<Input id='login' name='login' label='login' type='text'/>)

        const input = await findByTestId('input')


        expect(input).toBeInTheDocument()
    })

    it('renders a input with label', async () => {
        const {findByTestId, findByLabelText} = render(<Input name='login' id='login' label='login' type='text'/>)

        const input = await findByTestId('input')
        const label = await findByTestId('label')
        const labelText = await findByLabelText('login')
        expect(input).toBeInTheDocument()
        expect(label).toBeInTheDocument()
        expect(labelText).toBeInTheDocument()

    })
    it('renders a input type password', async () => {
        const {findByTestId} = render(<Input name='login' id='login' label='login' type='password'/>)

        const input = await findByTestId('input')
        expect(input.getAttribute('type')).toBe('password')
        expect(input).toBeInTheDocument()

    })
    it('renders a input type email', async () => {
        const {findByTestId} = render(<Input name='login' id='login' label='login' type='email'/>)

        const input = await findByTestId('input')
        expect(input.getAttribute('type')).toBe('email')
        expect(input).toBeInTheDocument()

    })
    it('renders a input type defaul text', async () => {
        const {findByTestId} = render(<Input name='login' id='login' label='login' />)

        const input = await findByTestId('input')
        expect(input.getAttribute('type')).toBe('text')
        expect(input).toBeInTheDocument()

    })
    it('renders a input with placeholder', async () => {
        const {findByTestId} = render(<Input name='login' id='login' placeholder='Digite sua senha' label='login' type='password'/>)

        const input = await findByTestId('input')
        expect(input.getAttribute('placeholder')).toBe('Digite sua senha')
        expect(input).toBeInTheDocument()

    })
    it('renders a disabled input', async () => {
        const {findByTestId} = render(<Input name='login' id='login' disabled={true} label='login' type='password'/>)

        const input = await findByTestId('input')
        expect(input).toBeDisabled()
        expect(input).toBeInTheDocument()

    })
    it('renders a input with default value', async () => {
        const {findByTestId} = render(<Input name='login' id='login' label='login' value={'123'} />)

        const input = await findByTestId('input')
        expect(input.getAttribute('value')).toBe('123')
        expect(input).toBeInTheDocument()

    })
    it('renders a input with errors', async () => {
        const {findByTestId, container} = render(<Input name='login' id='login' label='login' rules={[(value: any) => !!value || 'Campo obrigatorio']} type='password'/>)

        const input = await findByTestId('input')
        const error = screen.getByText(/Campo obrigatorio/)
        expect(container.getElementsByClassName('border-red-300').length).toBe(1)
        expect(input).toBeInTheDocument()
        expect(error).toBeInTheDocument()
        expect(container.getElementsByTagName('p').length).toBe(1)
    })

    it('renders a input without label', async () => {
        const {findByTestId, queryByTestId} = render(<Input name='login' id='login' type='text'/>)

        const input = await findByTestId('input')
        const label = await queryByTestId('label')
        expect(input).toBeInTheDocument()
        expect(label).toBeFalsy()

    })
})
