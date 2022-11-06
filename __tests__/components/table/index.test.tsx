import {render} from '@testing-library/react'
import React from "react";
import Table from "@components/table";

import {conquerors, headers, headersConquerors, headersProduct, peoples, products} from "@mocks/table";
import formatPrice from "../../../src/functions/formatPrice/formatPrice";
import {act} from "react-dom/test-utils";
import {PencilIcon} from "@heroicons/react/24/outline";
import MenuOption from "@components/option";

//funcao de mock do handler
const mockFn = jest.fn()


function TableMenu(id:number){
    const options = [
        {label:'Editar', icon:<PencilIcon className="mr-2 h-5 w-5 text-cyan-400"  />, handler:mockFn},

    ]

    return <MenuOption options={options}>{id}</MenuOption>
}

describe('Table', () => {

    it('renders snapshot', () => {
        const {container} = render(<Table headers={headers} data={peoples}/>)
        expect(container).toMatchSnapshot()
    })

    it('renders a table', async () => {
        const {container} = render(<Table headers={headers} data={peoples}/>)
        const th = container.getElementsByTagName('th')
        expect(th.length).toBe(4)
        const td = container.getElementsByTagName('td')
        expect(td.length).toBe(4)
        const tr = container.getElementsByTagName('tr')
        expect(tr.length).toBe(2)
    })
    it('renders a table with hidden columns', async () => {
        const {queryByText} = render(<Table headers={headersConquerors}
                                            data={conquerors}
                                            hiddenHeaders={['id']}/>)

        const id = await queryByText(/ID/)
        expect(id).toBeFalsy()

    })

    it('renders a table with formatted price', async () => {
        const {queryByText} = render(<Table headers={headersProduct}
                                            data={products}
                                            formatFn={ { 'price': formatPrice } }/>)

        const price = await queryByText(/R\$ 1,20/)
        expect(price).toBeInTheDocument()

    })
    it('renders a table with options menu', async () => {
        const {queryByText, getByText} = render(<Table headers={headersProduct}
                                            data={products}
                                            formatFn={ { 'price': formatPrice } } options={TableMenu}/>)

        const optionMenu = await queryByText(/Opções/)
        expect(optionMenu).toBeInTheDocument()
        const option = await getByText(/Opções/)

        //cria a acao de clicar no botao
        act(()=>{
            option.click()
        })

        const editOption = await getByText(/Editar/)
        expect(editOption).toBeInTheDocument()

        //cria a acao de clicar no botao
        act(()=>{
            editOption.click()
        })
        //espera que a funcao do clicar no menu tenha sido executada uma vez
        expect(mockFn.mock.calls.length).toBe(1)

    })


})
