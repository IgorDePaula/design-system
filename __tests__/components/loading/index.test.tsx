import {render} from '@testing-library/react'
import Loading from "@components/loading"
import ThemeEnum from "@enums/LoadingThemeEnum";

describe('Loading', () => {

    it('renders snapshot', () => {
        const {container} = render(<Loading theme={ThemeEnum.light} />)
        expect(container).toMatchSnapshot()
    })

    it('renders a loading', async () => {
        const {findByTestId} = render(<Loading theme={ThemeEnum.light}/>)

        const loading = await findByTestId('loading')


        expect(loading).toBeInTheDocument()
    })

    it('renders a loading a light mode',  async() => {
        const {findByTestId, container} = render(<Loading theme={ThemeEnum.light}/>)

        const loading = await findByTestId('loading')
        expect(loading).toBeInTheDocument()

        expect(container.getElementsByClassName('text-blue-500').length).toBe(1)
    })

    it('renders a loading a dark mode',  async() => {
        const {findByTestId, container} = render(<Loading theme={ThemeEnum.dark}/>)

        const loading = await findByTestId('loading')
        expect(loading).toBeInTheDocument()

        expect(container.getElementsByClassName('text-white').length).toBe(1)
    })
})
