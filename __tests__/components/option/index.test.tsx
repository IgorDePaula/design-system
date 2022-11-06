import {render} from '@testing-library/react'
import Option from '@components/option'
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import React from "react";
import {act} from "react-dom/test-utils";


//funcao de mock do handler
const mockFn = jest.fn()
const mockFn2 = jest.fn()

const opcoes = [
    {label:'Editar', icon:<PencilIcon className="mr-2 h-5 w-5 text-cyan-400"  />, handler:mockFn},
    {label:'Deletar', icon:<TrashIcon className="mr-2 h-5 w-5 text-cyan-400" />, handler:mockFn2 },
]

describe('Option', () => {

    it('renders snapshot', () => {
        const {container} = render(<Option options={[]} >1</Option>)
        expect(container).toMatchSnapshot()
    })

    it('renders a option', async () => {
        const { getByText} = render(<Option options={[]} >1</Option>)

        const option = await getByText(/Opções/)


        expect(option).toBeInTheDocument()
    })

    it('renders a option and click', async () => {
        const { getByText} = render(<Option options={opcoes} >1</Option>)

        const option = await getByText(/Opções/)

        act(()=>{
            option.click()
        })

        const deleteOption = await getByText(/Deletar/)
        expect(deleteOption).toBeInTheDocument()
        act(()=>{
            deleteOption.click()
        })
        expect(mockFn2.mock.calls.length).toBe(1)

    })

})
