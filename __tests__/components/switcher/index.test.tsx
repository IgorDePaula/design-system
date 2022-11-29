import {render, screen} from '@testing-library/react'

import Switcher from "@components/switcher";
import React from 'react';


describe("Switcher", () => {
    it('renders snapshot', () => {
        const {container} = render(<Switcher name='configuration' />)
        expect(container).toMatchSnapshot()
    })

    it('renders a switcher', async () => {
        const {findByTestId} = render(<Switcher name='configuration'  />)

        const button = await findByTestId('switcher')

        expect(button).toBeInTheDocument()
    })

    it('renders a switcher with label', async () => {
        render(<Switcher name='configuration' label='Opção habilitada?' />)

        const label = await screen.getByText('Opção habilitada?')

        expect(label).toBeInTheDocument()
    })
})

