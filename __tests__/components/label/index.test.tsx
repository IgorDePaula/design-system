import {render, screen} from '@testing-library/react'
import Label from "@components/label";
import React from 'react';


describe('Label', () => {
    it('renders snapshot', () => {
        const {container} = render(<Label id='label'><span>Example</span></Label>)
        expect(container).toMatchSnapshot()
    })

    it('renders a label', async () => {
        const {findByTestId} = render(<Label id='label'><span>Example</span></Label>)

        const loading = await findByTestId('label')


        expect(loading).toBeInTheDocument()
    })

    it('renders a children label', async () => {
        render(<Label id='label'><span>Example</span></Label>)

        const loading = screen.getByText('Example')
        expect(loading).toBeInTheDocument()

    })
})
