import React, { Fragment, useEffect, useState } from "react";
import Label from "../label";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export type SelectType = {
  label?: string;
  selectedValue?: string;
  name: string;
  options: SelectOptionType[];
  disabled?: boolean;
  required?: boolean;
  isSubmiting?: boolean;
  getValue?: (value: object) => void;
  getError?: (value: object) => void;
  variant?: "connexio" | "klub";
};

export type SelectOptionType = {
  label: string;
  value: string;
  disabled?: boolean;
};

const Select = (props: SelectType) => {
  const variantFocus =
    props.variant === "connexio"
      ? "focus:border-connexio-primary-light"
      : "focus:border-klub-primary";
  const {
    label,
    name,
    variant,
    selectedValue,
    options,
    isSubmiting,
    required,
    getValue,
    getError,
    disabled,
  } = props;
  const [selected, setSelected] =
    useState<string | number | undefined>(selectedValue);
  const [hasError, setError] = useState<boolean>(false);
  const classes = hasError
    ? "border-red-300 focus:border-red-500"
    : "border-gray-300 focus:border-gray-500";

  useEffect(() => {
    const pairValue = {};
    // @ts-ignore
    pairValue[name] = selected;
    getValue && getValue(pairValue);
    hasError && setError(false);
  }, [selected]);

  useEffect(() => {
    if (required && isSubmiting && !selected) {
      const pairError = {};
      // @ts-ignore
      pairError[name] = true;
      getError && getError(pairError);
      setError(true);
    }
    if (required && isSubmiting && selected) {
      setError(false);
    }
  }, [isSubmiting]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected} disabled={disabled}>
        {label && <Label id={label}>{label}</Label>}

        <Listbox.Button
          className={`${variantFocus} relative w-full h-10 rounded border bg-white py-2 pl-3 pr-10 text-left  ${classes} ${
            disabled ? "cursor-not-allowed" : ""
          } sm:text-sm`}
        >
          <span className="block truncate">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={
              variant === "connexio"
                ? `absolute mt-1 w-fit z-50 overflow-auto ring-1 ring-connexio-primary-light rounded-md bg-white outline-none border-none py-1 text-base shadow-lg  focus:outline-none sm:text-sm`
                : `absolute mt-1 w-fit z-50  overflow-auto ring-1 ring-klub-primary rounded-md bg-white outline-none border-none py-1 text-base shadow-lg  focus:outline-none sm:text-sm`
            }
          >
            {options.map((option: SelectOptionType, index: number) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative ${
                    disabled ? "cursor-not-allowed" : "cursor-pointer"
                  } select-none py-2 pl-3 pr-4 ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        disabled ? "cursor-not-allowed" : ""
                      } ${selected ? "font-medium" : "font-normal"}`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span
                        className={`  inset-y-0 left-0 flex items-center pl-3 text-gray-600 ${
                          disabled ? "cursor-not-allowed" : ""
                        }`}
                      ></span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
      {hasError && (
        <p className="mt-2 text-sm text-red-600">Campo obrigatório!</p>
      )}
    </div>
  );
};

export default Select;
