import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import TableCom from "@components/table";
import {conquerors, headers, headersConquerors, headersProduct, peoples, products} from "@mocks/table";
import formatPrice from "../../../functions/formatPrice/formatPrice";
import TableMenu from "@components/menus/tableMenu";

export default {
    title: 'UI/Table',
    component: TableCom,
    argTypes: {
        headers: {
            description: 'Cabeçalhos da tabela. O cabeçalho deve vir com pares de nomes, para simplificar a tradução',
        },
        data: {
            description: 'Array de dados da tabela. Pode ser string ou outro componente React',
        },
        hiddenHeaders: {
            description: 'Array de cabeçalhos que devem ser ocultos na tabela. Sua coluna também será oculta.',
        },
        formatFn: {
            description: 'Função de formatação do valor da célula.',
        },
        options: {
            description: 'Menu de opções para o registro selecionado.',
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente table para dados tabulares',
            },
        },
    },
} as ComponentMeta<typeof TableCom>;

const Template: ComponentStory<typeof TableCom> = (args) => <TableCom {...args} />;

export const TableComponent = Template.bind({});

TableComponent.args = {
    headers:headers,
    data:peoples
}
export const TableComponentWithFormatFn = Template.bind({});

TableComponentWithFormatFn.args = {
    headers:headersProduct,
    data:products,
    formatFn:{'price':formatPrice}
}
export const TableComponentWithOptions = Template.bind({});

TableComponentWithOptions.args = {
    headers:headersConquerors,
    data:conquerors,
    hiddenHeaders:['id'],
    options: TableMenu
}


