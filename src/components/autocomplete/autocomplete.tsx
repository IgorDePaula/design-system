import React, {useEffect, useState} from "react";
import Label from "../label";
import {Combobox as Combo} from '@headlessui/react'


export type AutocompleteType = {
    label?: string
    name:string
    selectedValue?: string
    options:AutocompleteOptionType[]
    disabled?: boolean
    required?: boolean
    isSubmiting?: boolean
    getValue?: (value: object) => void
    getError?: (value: object) => void
}

export type AutocompleteOptionType = {
    label: string
    value: string
    disabled?: boolean
}

const Autocomplete = (props: AutocompleteType) => {
    const {label, selectedValue, options, name, required, getValue, getError, isSubmiting, disabled} = props
    const [selected, setSelected] = useState<string | number | undefined>(selectedValue)
    const [query, setQuery] = useState('')

    const [hasError, setError] = useState<boolean>(false)
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500'
    const filteredOptions =
        query === ''
            ? options
            : options.filter((option: AutocompleteOptionType) => {
                return option.value.toLowerCase().includes(query.toLowerCase())
            })

    useEffect(() => {
        const pairValue = {}
        // @ts-ignore
        pairValue[name] = selected
        getValue && getValue(pairValue)
        hasError && setError(false)
    }, [selected])

    useEffect(() => {
        if (required && isSubmiting && !selected) {
            const pairError = {}
            // @ts-ignore
            pairError[name] = true
            getError && getError(pairError)
            setError(true)
        }
        if (required && isSubmiting && selected) {
            setError(false)
        }
    }, [isSubmiting])

    return (
        <Combo value={selected} data-testid='autocomplete' onChange={setSelected} disabled={disabled} >
            <Combo.Button disabled={disabled} className={'relative w-full text-left'}>
                {label && <Label id={'label'}>{label}</Label>}
                    <Combo.Input data-testid='combo-input'  disabled={disabled} className={`block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes} ${disabled? 'cursor-not-allowed':''}`}
                                 onChange={(event) => setQuery(event.target.value)}/>
                    <Combo.Options>
                        {filteredOptions.map((option:any, index:number) =>
                            <Combo.Option className={'relative bg-white z-50'} key={index} value={option.value} disabled={option.disabled}>
                                {option.label}
                            </Combo.Option>
                        )}
                    </Combo.Options>

            </Combo.Button>
        </Combo>
    )
}

export default Autocomplete
