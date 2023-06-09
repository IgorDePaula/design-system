import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import classNames from "../../functions/classNames";
import Label from "@components/label";

export type RadioButtonType = {
  name: string;
  disabled?: boolean;
  variant?: "connexio" | "klub";
  label?: string;
  checked?: string | number;
  options: RadioButtonOptionType[];
  position?: "vertical" | "horizontal";
  required?: boolean;
  isSubmiting?: boolean;
  getValue?: (value: object) => void;
  getError?: (value: object) => void;
};

export type RadioButtonOptionType = {
  title: string;
  description?: string;
  value: number | string;
};

const RadioButton = (props: RadioButtonType) => {
  const {
    label,
    variant,
    options,
    position = "horizontal",
    name,
    disabled,
    checked,
    isSubmiting,
    getValue,
    getError,
    required,
  } = props;

  // @ts-ignore
  return (
    <div data-testid="radio">
      {position == "horizontal" ? (
        <Horizontal
          name={name}
          options={options}
          getValue={getValue}
          getError={getError}
          variant={variant}
          isSubmiting={isSubmiting}
          label={label}
          checked={checked}
          disabled={disabled}
          required={required}
        />
      ) : (
        <Vertical
          name={name}
          options={options}
          getValue={getValue}
          variant={variant}
          getError={getError}
          isSubmiting={isSubmiting}
          label={label}
          checked={checked}
          disabled={disabled}
          required={required}
        />
      )}
    </div>
  );
};
export type OptionsProps = {
  options: RadioButtonOptionType[];
  variant?: "connexio" | "klub";
  label?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  isSubmiting?: boolean;
  checked?: string | number | null | undefined;
  getValue?: (value: object) => void;
  getError?: (value: object) => void;
};

const Horizontal = ({
  options,
  variant,
  label,
  name,
  checked,
  disabled,
  getValue,
  getError,
  isSubmiting,
  required,
}: OptionsProps) => {
  const [selected, setSelected] = useState(checked);
  const [hasError, setError] = useState<boolean>(false);

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

  const classes = hasError
    ? `border-2 border-red-300 focus:border-red-500 rounded-lg horizontal ${
        disabled ? "disabled" : ""
      }`
    : `horizontal  ${disabled ? "disabled" : ""}`;
  const disabledClass = disabled ? "cursor-not-allowed" : "cursor-pointer ";

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      disabled={disabled}
      name={name}
      className={classes}
    >
      {label && <Label id={label}>{label}</Label>}
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 ">
        {options.map((option: RadioButtonOptionType, index: number) => {
          return (
            <RadioGroup.Option
              key={index}
              value={option.value}
              className={
                variant === "connexio"
                  ? ({ checked, active }) =>
                      classNames(
                        checked
                          ? "border-transparent bg-connexio-primary"
                          : "border-gray-200 bg-connexio-primary-light text-white",
                        active
                          ? "border-connexio-primary ring-2 ring-connexio-primary bg-connexio-primary text-white"
                          : "",
                        `relative flex ${disabledClass} rounded-lg border bg-connexio-primary-light text-white p-4 shadow-sm focus:outline-none`
                      )
                  : ({ checked, active }) =>
                      classNames(
                        checked
                          ? "border-transparent bg-klub-hover"
                          : "border-gray-200 bg-klub-primary text-white",
                        active
                          ? "border-klub-hover ring-2 ring-klub-hover bg-klub-hover text-white"
                          : "",
                        `relative flex ${disabledClass} rounded-lg border bg-klub-primary text-white p-4 shadow-sm focus:outline-none`
                      )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {option.title}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className="mt-1 flex items-center text-sm text-gray-500"
                      >
                        {option.description}
                      </RadioGroup.Description>
                    </span>
                  </span>
                  <CheckCircleIcon
                    className={classNames(
                      !checked ? "invisible" : "",
                      "h-5 w-5 text-indigo-600"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-indigo-500" : "border-transparent",
                      "pointer-events-none absolute -inset-px rounded-lg"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
};

const Vertical = ({
  options,
  variant,
  label,
  name,
  checked,
  disabled,
  getValue,
  getError,
  isSubmiting,
  required,
}: OptionsProps) => {
  const [selected, setSelected] = useState(checked);
  const [hasError, setError] = useState<boolean>(false);

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

  const classes = hasError
    ? `border-2 border-red-300 focus:border-red-500 rounded-lg vertical ${
        disabled ? "disabled" : ""
      }`
    : `vertical ${disabled ? "disabled" : ""}`;
  const disabledClass = disabled ? "cursor-not-allowed" : "cursor-pointer ";

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      disabled={disabled}
      name={name}
      className={classes}
    >
      {label && <Label id={label}>{label}</Label>}
      <div className="space-y-4">
        {options.map((option: RadioButtonOptionType, index: number) => (
          <RadioGroup.Option
            key={index}
            value={option.value}
            className={
              variant === "connexio"
                ? ({ checked, active }) =>
                    classNames(
                      checked
                        ? "border-transparent bg-connexio-primary"
                        : "border-gray-200 bg-connexio-primary-light text-white",
                      active
                        ? "border-connexio-primary ring-2 ring-connexio-primary bg-connexio-primary-light text-white"
                        : "",
                      `relative flex ${disabledClass} rounded-lg border bg-connexio-primary-light text-white p-4 shadow-sm focus:outline-none`
                    )
                : ({ checked, active }) =>
                    classNames(
                      checked
                        ? "border-transparent bg-klub-hover"
                        : "border-gray-200 bg-klub-primary text-white",
                      active
                        ? "border-klub-hover ring-2 ring-klub-hover bg-klub-hover text-white"
                        : "",
                      `relative flex ${disabledClass} rounded-lg border bg-klub-primary text-white p-4 shadow-sm focus:outline-none`
                    )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex w-full">
                    <span className="flex flex-col text-sm w-full">
                      <RadioGroup.Label as="span" className="font-medium">
                        {option.title}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className="text-gray-500"
                      >
                        <span className="block sm:inline">
                          {option.description}
                        </span>
                        {""}
                      </RadioGroup.Description>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? "invisible" : "",
                        "h-5 w-5"
                      )}
                      aria-hidden="true"
                    />
                </div>
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-500" : "border-transparent",
                    "pointer-events-none absolute  -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default RadioButton;
