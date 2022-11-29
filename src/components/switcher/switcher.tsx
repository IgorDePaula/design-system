import React, {useEffect, useState} from "react";
import {Switch} from '@headlessui/react'
import Label from "@components/label";

export type SwitcherType = {
    label?: string
    name: string
    state?: boolean
    required?: boolean
    isSubmiting?: boolean
    getValue?: (value: object) => void
    getError?: (value: object) => void
}

const Switcher: React.FunctionComponent<SwitcherType> = (props: SwitcherType) => {
    const {label, name, isSubmiting = false, required = false, state = false, getError, getValue = null} = props
    const [hasError, setError] = useState<boolean>(false)

    const [enabled, setEnabled] = useState<boolean | undefined>(state)
    useEffect(() => {
        const pairValue = {}
        // @ts-ignore
        pairValue[name] = enabled
        getValue && getValue(pairValue)
        hasError && setError(false)
    }, [enabled])

    useEffect(() => {
        if (required && isSubmiting && !enabled) {
            const pairError = {}
            // @ts-ignore
            pairError[name] = true
            getError && getError(pairError)
            setError(true)
        }
        if (required && isSubmiting && enabled) {
            setError(false)
        }
    }, [isSubmiting])


    return (<div  data-testid="switcher"><Switch.Group>
            <>
                <div className={'flex items-center'}>
                    {label && <Label id={label} className='mr-4'>
                        {label}
                    </Label>}
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
          <span
              className={`${
                  enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
                    </Switch>

                </div>
                {hasError && <p className="mt-2 text-sm text-red-600">
                    Campo obrigatório!
                </p>}
            </>
        </Switch.Group></div>

    )
}

export default Switcher
