
export default {
    title: 'UI/Form',
    argTypes: {
        theme: {
            description: 'Light em fundo claro, Dark em fundo escuro',
            options: ['dark', 'light'],
            table: {
                type: {
                    dark: 'Dark',
                    light: 'Light'
                }
            },
            control: {type: 'radio'}
        },
    },
    parameters: {
        layout: 'centered',
        theme: {
            values: {
                dark: 'dark',
                light: 'light'
            }
        },
        docs: {
            description: {
                component: 'Componente de carregando para colocar em botoes de formularios',
            },
        },
    },
} ;
