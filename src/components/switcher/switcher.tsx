import React, {useEffect, useState} from "react";
import {Switch} from '@headlessui/react'

export type SwitcherType = {
    label?: string
    state?: boolean,
    getState?: (param: boolean | undefined) => void
}
const Switcher: React.FunctionComponent<SwitcherType> = (props: SwitcherType) => {
    const {label, state = false, getState = null} = props

    const [enabled, setEnabled] = useState<boolean | undefined>(state)
    useEffect(() => {
        getState && getState(enabled)
    }, [enabled])


return (
        <Switch.Group data-testid='switcher'>
            <div className="flex items-center">
                {label && <Switch.Label className="mr-4">{label}</Switch.Label>}
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
        </Switch.Group>
    )
}

export default Switcher
