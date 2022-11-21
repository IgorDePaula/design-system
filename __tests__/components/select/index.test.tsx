import {render} from '@testing-library/react'
import Select from "@components/select";
import React from 'react';
import people from "../../../src/mocks/autocomplete";
describe('input', () => {

    it('renders snapshot', () => {
        const {container} = render(<Select options={people} />)
        expect(container).toMatchSnapshot()
    })

    it('renders a select with label', async () => {
        const {findByTestId} = render(<Select options={people} label='Teste' />)

        const label = await findByTestId('label')
        expect(label).toBeInTheDocument()
        expect(label.textContent).toBe('Teste')

    })

})
