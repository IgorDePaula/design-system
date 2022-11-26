var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useState } from "react";
import Input from "../input";
import Select from "../select";
import Autocomplete from "../autocomplete";
import RadioButton from "../radiobutton";
import Switcher from "../switcher";
import Button from "../button";
const Components = {
    'text-input': Input,
    'switch': Switcher,
    'select': Select,
    'autocomplete': Autocomplete,
    'radio': RadioButton
};
const Form = (props) => {
    const { fields, onSubmit, isLoading } = props;
    const [data, setData] = useState({});
    const [errors, setErrors] = useState([]);
    const [isSubmiting, setSubmiting] = useState(false);
    useEffect(() => {
        if (isSubmiting) {
            setTimeout(() => setSubmiting(false), 300);
        }
    }, [isSubmiting]);
    return (React.createElement("div", null,
        React.createElement("div", null, fields.map((item, index) => {
            const { component } = item, chars = __rest(item
            // @ts-ignore
            , ["component"]);
            // @ts-ignore
            return React.createElement("div", { className: 'm-2', key: index }, React.createElement(Components[component], Object.assign(Object.assign({}, chars), { isSubmiting, getValue: (componentValue) => {
                    setData(prev => {
                        return Object.assign(Object.assign({}, prev), componentValue);
                    });
                }, getError: (componentValue) => {
                    setErrors(prev => {
                        return Object.assign(Object.assign({}, prev), componentValue);
                    });
                } })));
        })),
        React.createElement("div", { className: 'mt-3' },
            React.createElement(Button, { isLoading: isLoading, onclick: () => {
                    setSubmiting(true);
                    if (errors.length == 0)
                        onSubmit(data);
                }, text: 'Salvar' }))));
};
export default Form;
//# sourceMappingURL=form.js.map