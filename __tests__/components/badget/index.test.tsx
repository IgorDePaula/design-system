import {render} from '@testing-library/react';
import React from 'react';
import Badget from "@components/badget";

describe('Badget', () => {
    it('renders snapshot', () => {
        const {container} = render(<Badget text='Ativo'/>)
        expect(container).toMatchSnapshot()
    })

    it('renders a badget default', async () => {
        const {findByTestId, container} = render(<Badget text='Ativo'/>)

        const badget = await findByTestId('badget')


        expect(badget).toBeInTheDocument()
        expect(container.getElementsByClassName('text-green-800 bg-green-100').length).toBe(1)
    })

    it('renders a badget success', async () => {
        const {findByTestId, container} = render(<Badget text='Ativo' variant='success'/>)

        const badget = await findByTestId('badget')


        expect(badget).toBeInTheDocument()
        expect(container.getElementsByClassName('text-green-800 bg-green-100').length).toBe(1)
    })

    it('renders a badget error', async () => {
        const {findByTestId, container} = render(<Badget text='Ativo' variant='error'/>)

        const badget = await findByTestId('badget')


        expect(badget).toBeInTheDocument()
        expect(container.getElementsByClassName('text-red-800 bg-red-100').length).toBe(1)
    })

    it('renders a badget info', async () => {
        const {findByTestId, container} = render(<Badget text='Ativo' variant='info'/>)

        const badget = await findByTestId('badget')


        expect(badget).toBeInTheDocument()
        expect(container.getElementsByClassName('text-cyan-800 bg-cyan-100').length).toBe(1)
    })

    it('renders a badget warning', async () => {
        const {findByTestId, container} = render(<Badget text='Ativo' variant='warning'/>)

        const badget = await findByTestId('badget')


        expect(badget).toBeInTheDocument()
        expect(container.getElementsByClassName('text-yellow-800 bg-yellow-100').length).toBe(1)
    })
})
