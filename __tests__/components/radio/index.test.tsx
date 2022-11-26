import {render, screen} from '@testing-library/react'
import Radio from "@components/radiobutton";
import React from 'react';
import {mailingLists} from "../../../src/mocks/radiobutton";

describe('radio button', () => {

    it('renders snapshot', () => {
        const {container} = render(<Radio name={'teste'} options={mailingLists} getValue={()=>{}}/>)
        expect(container).toMatchSnapshot()
    })

    it('renders a radiobutton', async () => {
        const {findByTestId} = render(<Radio name={'teste'} options={mailingLists} getValue={()=>{}}/>)
        const radio = await findByTestId('radio')
        expect(radio).toBeInTheDocument()
    })

    it('renders a radiobutton with label', async () => {
        const {findByTestId} = render(<Radio name={'teste'} label={'Teste'} options={mailingLists} getValue={()=>{}}/>)
        const radio = await findByTestId('radio')
        const label = await findByTestId('label')
        expect(radio).toBeInTheDocument()
        expect(label).toBeInTheDocument()
        expect(label.textContent).toBe('Teste')
    })

    it('renders a disabled radio', async () => {
        const {findByTestId} =  render(<Radio name={'teste'} disabled={true} label={'Teste'} options={mailingLists} getValue={()=>{}}/>)
        const radio = await findByTestId('radio')
        expect(radio).toBeInTheDocument()
        expect(radio.children[0].classList.contains('disabled')).toBeTruthy()

    })
    it('renders a horizontal radio', async () => {
        const {findByTestId} =  render(<Radio name={'teste'} disabled={true}  options={mailingLists} getValue={()=>{}}/>)
        const radio = await findByTestId('radio')
        expect(radio).toBeInTheDocument()
        expect(radio.children[0].classList.contains('horizontal')).toBeTruthy()

    })
    it('renders a vertical radio', async () => {
        const {findByTestId} =  render(<Radio name={'teste'} disabled={true} position='vertical' options={mailingLists} getValue={()=>{}}/>)
        const radio = await findByTestId('radio')
        expect(radio).toBeInTheDocument()
        expect(radio.children[0].classList.contains('vertical')).toBeTruthy()

    })
})
