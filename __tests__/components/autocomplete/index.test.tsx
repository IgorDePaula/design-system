import {render} from '@testing-library/react'
import Autocomplete from "@components/autocomplete";
import React from 'react';
import people from "../../../src/mocks/autocomplete";
describe('input', () => {

    it('renders snapshot', () => {
        const {container} = render(<Autocomplete name='teste' options={people} />)
        expect(container).toMatchSnapshot()
    })

    it('renders a autocomplete', async () => {
        const {findByTestId} =  render(<Autocomplete name='teste' options={people} />)

        const autocomplete = await findByTestId('autocomplete')


        expect(autocomplete).toBeInTheDocument()
    })

    it('renders a autocomplete with label', async () => {
        const {findByTestId} = render(<Autocomplete name='teste' options={people} label='Teste' />)

        const label = await findByTestId('label')
        expect(label).toBeInTheDocument()
        expect(label.textContent).toBe('Teste')

    })
    it('renders a autocomplete disabled', async () => {
        const {findByTestId} = render(<Autocomplete name='teste' options={people} label='Teste' disabled={true} />)
        const autocomplete = await findByTestId('autocomplete')
        expect(autocomplete).toBeDisabled()

    })

})
