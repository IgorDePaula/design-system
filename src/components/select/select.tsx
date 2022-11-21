import React, {Fragment, useEffect, useState} from "react";
import Label from "../label";
import {Listbox} from '@headlessui/react'

export type SelectType = {
    label?: string
    selectedValue?: string
    options: SelectOptionType[]
    disabled?: boolean
    getState?: (param: string | number | undefined) => void
    rules?: ((params: string | null | undefined) => (boolean | string))[]
    hasError?: (params: boolean) => void
}

export type SelectOptionType = {
    label: string
    value: string
    disabled?: boolean
}

const Select = (props: SelectType) => {
    const {label, selectedValue, options, rules = [], getState, disabled} = props
    const [selected, setSelected] = useState<string | number | undefined>(selectedValue)

    const validation = rules && rules.map(fn => fn(selectedValue)).filter(Boolean)
    const hasError = Boolean(validation.length)
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500'
    useEffect(() => {
        getState && getState(selected)
    }, [selected])
    return (
        <Listbox as={Fragment}  value={selected} onChange={setSelected} disabled={disabled}>
            {label && <Label id={'label'}>{label}</Label>}
            <Listbox.Button as='div'
                            className={`block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes} ${disabled ? 'cursor-not-allowed' : ''}`}>{selected}</Listbox.Button>
            <Listbox.Options as='div'>
                {options.map((option: SelectOptionType, index:number) => (
                    <Listbox.Option
                        key={index}
                        value={option.value}
                        disabled={option.disabled}
                        as={'div'}
                    >
                        {option.label}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default Select
