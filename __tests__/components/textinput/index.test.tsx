import {render} from '@testing-library/react'
import TextInput from "@components/textinput";
import React from 'react';

describe('TextInput', () => {

    it('renders snapshot', () => {
        const {container} = render(<TextInput id='login' label='login' type='text'/>)
        expect(container).toMatchSnapshot()
    })

    it('renders a textinput', async () => {
        const {findByTestId} = render(<TextInput id='login' label='login' type='text'/>)

        const textinput = await findByTestId('textinput')


        expect(textinput).toBeInTheDocument()
    })

    it('renders a textinput with label', async () => {
        const {findByTestId, findByLabelText} = render(<TextInput id='login' label='login' type='text'/>)

        const textinput = await findByTestId('textinput')
        const label = await findByTestId('label')
        const labelText = await findByLabelText('login')
        expect(textinput).toBeInTheDocument()
        expect(label).toBeInTheDocument()
        expect(labelText).toBeInTheDocument()

    })
    it('renders a textinput with classes', async () => {
        const {findByTestId, findByLabelText, container} = render(<TextInput id='login' label='login' type='text' className='text-blue-500'/>)

        const textinput = await findByTestId('textinput')
        const label = await findByTestId('label')
        const labelText = await findByLabelText('login')

        expect(container.getElementsByClassName('text-blue-500').length).toBe(1)
        expect(textinput).toBeInTheDocument()
        expect(label).toBeInTheDocument()
        expect(labelText).toBeInTheDocument()

    })

    it('renders a textinput without label', async () => {
        const {findByTestId, queryByTestId} = render(<TextInput id='login'  type='text'/>)

        const textinput = await findByTestId('textinput')
        const label = await queryByTestId('label')
        expect(textinput).toBeInTheDocument()
        expect(label).toBeFalsy()

    })
})
