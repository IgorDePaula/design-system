/*
import { render } from '@testing-library/react'
import {default as Avatar} from "@components/avatar"

describe('Avatar', () => {
    it('renders snapshot', () => {
        const { container } = render(<Avatar  url='#'/>)
        expect(container).toMatchSnapshot()
    })
    it('renders a avatar', async() => {
        const {findAllByTestId} = render(<Avatar url='#' />)

        const avatar = await findAllByTestId('avatar')


        expect(avatar[0]).toBeInTheDocument()
    })
})
*/

import { render } from '@testing-library/react';
import React from 'react';

import { AvatarComponent } from '../../../src/stories/ui/avatar/Avatar.stories';

it('renders snapshot', () => {
    const { container } = render(<AvatarComponent  url='#'/>)
    expect(container).toMatchSnapshot()

})
it('renders a avatar', async() => {
    const {findAllByTestId} = render(<AvatarComponent url='#' />)

    const avatar = await findAllByTestId('avatar')


    expect(avatar[0]).toBeInTheDocument()
})
