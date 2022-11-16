import {render} from '@testing-library/react'
import {LockClosedIcon} from "@heroicons/react/20/solid";

import Button from "@components/button";
import React from 'react';


describe("Button", () => {
    it('renders snapshot', () => {
        const {container} = render(<Button text='acessar' onclick={() => {
        }}/>)
        expect(container).toMatchSnapshot()
    })

    it('renders a button', async () => {
        const {findByTestId} = render(<Button text='acessar' onclick={() => {
        }}/>)

        const button = await findByTestId('button')

        expect(button).toBeInTheDocument()
    })

    it('renders a button with icon', async () => {
        const {container} = render(<Button text='acessar' icon={<LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>} onclick={() => {
        }}/>)

        const icon = await container.querySelector('svg')

        expect(icon).toBeInTheDocument()
    })
    it('renders a button with loading', async () => {
        const {findByTestId} = render(<Button isLoading={true} text='acessar' icon={<LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>} onclick={() => {
        }}/>)
        const loading = await findByTestId('loading')

        expect(loading).toBeInTheDocument()
    })
})

