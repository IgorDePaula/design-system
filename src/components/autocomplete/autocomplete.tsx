import React, {useEffect, useState} from "react";
import Label from "../label";
import {Combobox as Combo} from '@headlessui/react'


export type AutocompleteType = {
    label?: string
    selectedValue?: string
    options:AutocompleteOptionType[]
    disabled?: boolean
    getState?:(param:string|number|undefined)=>void
    rules?: ((params: string | null | undefined) => (boolean | string))[]
    hasError?: (params: boolean) => void
}

export type AutocompleteOptionType = {
    label: string
    value: string
    disabled?: boolean
}

const Autocomplete = (props: AutocompleteType) => {
    const {label, selectedValue, options, rules = [], getState, disabled} = props
    const [selected, setSelected] = useState<string | number | undefined>(selectedValue)
    const [query, setQuery] = useState('')

    const validation = rules && rules.map(fn => fn(selectedValue)).filter(Boolean)
    const hasError = Boolean(validation.length)
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500'
    const filteredOptions =
        query === ''
            ? options
            : options.filter((option: AutocompleteOptionType) => {
                return option.value.includes(query.toLowerCase())
            })

    useEffect(()=>{
        getState && getState(selected)
    }, [selected])

    return (
        <Combo value={selected} data-testid='autocomplete' onChange={setSelected} disabled={disabled} >
            <Combo.Button disabled={disabled}>
                {label && <Label id={'label'}>{label}</Label>}
                    <Combo.Input data-testid='combo-input'  disabled={disabled} className={`block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes} ${disabled? 'cursor-not-allowed':''}`}
                                 onChange={(event) => setQuery(event.target.value)}/>
                    <Combo.Options>
                        {filteredOptions.map((option:any, index:number) =>
                            <Combo.Option key={index} value={option.value} disabled={option.disabled}>
                                {option.label}
                            </Combo.Option>
                        )}
                    </Combo.Options>

            </Combo.Button>
        </Combo>
    )
}

export default Autocomplete
