import {render, screen} from '@testing-library/react'

import Switcher from "@components/switcher";
import React from 'react';


describe("Switcher", () => {
    it('renders snapshot', () => {
        const {container} = render(<Switcher />)
        expect(container).toMatchSnapshot()
    })

    it('renders a switcher', async () => {
        const {findByTestId} = render(<Switcher />)

        const button = await findByTestId('switcher')

        expect(button).toBeInTheDocument()
    })

    it('renders a switcher with label', async () => {
        render(<Switcher label='Opção habilitada?' />)

        const label = await screen.getByText('Opção habilitada?')

        expect(label).toBeInTheDocument()
    })
})

