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

export const Default = Template.bind({});

Default.args = {
    headers:headers,
    data:peoples
}
export const ComponentWithFormatFuntion = Template.bind({});

ComponentWithFormatFuntion.args = {
    headers:headersProduct,
    data:products,
    formatFn:{'price':formatPrice}
}
export const ComponentWithOptionsMenu = Template.bind({});

ComponentWithOptionsMenu.args = {
    headers:headersConquerors,
    data:conquerors,
    options: TableMenu
}

export const ComponentWithHiddenHeaders = Template.bind({});

ComponentWithHiddenHeaders.args = {
    headers:headersConquerors,
    data:conquerors,
    hiddenHeaders: ['id']
}


