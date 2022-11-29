import React, {useEffect, useState} from "react";
import Input, {InputType} from "../input";
import Select, {SelectType} from "../select";
import Autocomplete, {AutocompleteType} from "../autocomplete";
import RadioButton, {RadioButtonType} from "../radiobutton";
import Switcher, {SwitcherType} from "../switcher";
import Button from "../button"

export type FieldType = {
    component: 'text-input' | 'switch' | 'select' | 'autocomplete' | 'radio'

}
export type FormType = {
    onSubmit: (data: object) => void
    isLoading?: boolean
    fields: (FieldType & (InputType | SelectType | AutocompleteType | RadioButtonType | SwitcherType))[]
}

const Components = {
    'text-input': Input,
    'switch': Switcher,
    'select': Select,
    'autocomplete': Autocomplete,
    'radio': RadioButton
}

const Form = (props: FormType) => {
    const {fields, onSubmit, isLoading} = props
    const [data, setData] = useState({})
    const [errors, setErrors] = useState([])
    const [isSubmiting, setSubmiting] = useState(false)
    useEffect(() => {
        if (isSubmiting) {
            setTimeout(() => setSubmiting(false), 300)
        }
    }, [isSubmiting])
    return (
        <div>
            <div>
                {fields.map((item: any, index: number) => {
                    const {component, ...chars} = item
                    // @ts-ignore
                    return <div className='m-2' key={index}>{React.createElement(Components[component], {
                        ...chars, isSubmiting, getValue: (componentValue: object) => {
                            setData(prev => {
                                return {...prev, ...componentValue}
                            })
                        },
                        getError: (componentValue: object) => {
                            setErrors(prev => {
                                return {...prev, ...componentValue}
                            })
                        },

                    })
                    }</div>
                })}
            </div>
            <div className='mt-3'>
                <Button isLoading={isLoading} onclick={() => {
                    setSubmiting(true)
                    if (errors.length == 0) onSubmit(data)
                }} text={'Salvar'}/>
            </div>
        </div>
    )
}

export default Form
