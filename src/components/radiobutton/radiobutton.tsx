import React, {useEffect, useState} from "react";
import {RadioGroup} from '@headlessui/react'
import {CheckCircleIcon} from '@heroicons/react/20/solid'
import classNames from "../../functions/classNames";
import Label from "@components/label";

export type RadioButtonType = {
    name: string
    disabled?: boolean
    hasError?: boolean
    label?: string
    checked?: string | number
    options: RadioButtonOptionType[]
    position?: 'vertical' | 'horizontal',
    getChecked: (param: string | number | null) => void
}

export type RadioButtonOptionType = {
    title: string
    description?: string
    value: number | string
}

const RadioButton = (props: RadioButtonType) => {

    const {label, options, position = 'horizontal', hasError, name, disabled, checked, getChecked} = props

    // @ts-ignore
    return <div data-testid='radio'>
        {position == 'horizontal' ?
            <Horizontal name={name} options={options} getChecked={getChecked}  label={label} checked={checked} disabled={disabled}
                        hasError={hasError}/> :
            <Vertical name={name} options={options} getChecked={getChecked} label={label} checked={checked} disabled={disabled}
                      hasError={hasError}/>}
    </div>

}
export type OptionsProps = {
    options: RadioButtonOptionType[]
    label?: string
    name: string
    hasError?: boolean
    disabled?: boolean
    checked?: string | number | null | undefined
    getChecked: (param: string | number | null) => void
}

const Horizontal = ({options, label, name, checked, hasError, disabled, getChecked}: OptionsProps) => {

    const [selected, setSelected] = useState(checked)
    const [error, setError] = useState(hasError)

    useEffect(() => {
        if (selected) {
            setError(false)
        }
    }, [selected])

    const classes = error ? `border-2 border-red-300 focus:border-red-500 rounded-lg horizontal ${disabled ? 'disabled':''}` : `horizontal ${disabled ? 'disabled':''}`
    const disabledClass = disabled ? 'cursor-not-allowed' : 'cursor-pointer '

    return (
        <RadioGroup value={selected} onChange={e=>{setSelected(e);getChecked(e)}} disabled={disabled} name={name} className={classes}>
            {label && <Label id={label}>{label}</Label>}
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                {options.map((option: RadioButtonOptionType, index: number) => {

                    return <RadioGroup.Option
                        key={index}
                        value={option.value}
                        className={({checked, active}) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-300',
                                active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                                `relative flex ${disabledClass} rounded-lg border bg-white p-4 shadow-sm focus:outline-none`
                            )
                        }
                    >
                        {({checked, active}) => (
                            <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {option.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                      {option.description}
                    </RadioGroup.Description>
                  </span>
                </span>
                                <CheckCircleIcon
                                    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                                    aria-hidden="true"
                                />
                                <span
                                    className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-indigo-500' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-lg'
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </RadioGroup.Option>
                })}
            </div>
        </RadioGroup>
    )
}


const Vertical = ({options, label, name, checked, hasError, disabled, getChecked}: OptionsProps) => {
    const [selected, setSelected] = useState(checked)
    const [error, setError] = useState(hasError)

    useEffect(() => {
        if (selected) {
            setError(false)
        }
    }, [selected])

    const classes = error ? `border-2 border-red-300 focus:border-red-500 rounded-lg vertical ${disabled ? 'disabled':''}` : `vertical ${disabled ? 'disabled':''}`
    const disabledClass = disabled ? 'cursor-not-allowed' : 'cursor-pointer '

    return (
        <RadioGroup value={selected} onChange={e=>{setSelected(e);getChecked(e)}} disabled={disabled} name={name} className={classes}>
            {label && <Label id={label}>{label}</Label>}
            <div className="space-y-4">
                {options.map((option: RadioButtonOptionType, index: number) => (
                    <RadioGroup.Option
                        key={index}
                        value={option.value}
                        className={({checked, active}) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-300',
                                active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                                `relative block ${disabledClass} rounded-lg border bg-white px-6 py-4 shadow-sm` +
                                ' focus:outline-none sm:flex sm:justify-between'
                            )
                        }
                    >
                        {({active, checked}) => (
                            <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label as="span" className="font-medium text-gray-900">
                       {option.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500">
                      <span className="block sm:inline">
                       {option.description}
                      </span>{' '}

                    </RadioGroup.Description>
                  </span>
                </span>
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default RadioButton
