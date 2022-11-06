var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Badget from "@components/badget";
var person = {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
var Name = function () {
    return _jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("div", __assign({ className: "h-10 w-10 flex-shrink-0" }, { children: _jsx("img", { className: "h-10 w-10 rounded-full", src: person.image, alt: "" }) })), _jsxs("div", __assign({ className: "ml-4" }, { children: [_jsx("div", __assign({ className: "font-medium text-gray-900" }, { children: person.name })), _jsx("div", __assign({ className: "text-gray-500" }, { children: person.email }))] }))] }));
};
var Title = function () {
    return _jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "text-gray-900" }, { children: person.title })), _jsx("div", __assign({ className: "text-gray-500" }, { children: person.department }))] });
};
export var peoples = [{
        id: 1,
        name: _jsx(Name, {}),
        title: _jsx(Title, {}),
        status: _jsx(Badget, { text: 'Ativo' }),
        role: person.role
    }];
export var products = [{
        id: 1,
        name: 'Coca-cola',
        price: 1.20,
        role: person.role
    }];
export var headers = [{ 'name': 'Nome' }, { 'title': "Titulo" }, { 'status': 'Status' }, { 'role': 'Tipo' }];
export var headersProduct = [{ 'name': 'Nome' }, { 'price': 'Preço' }, { 'role': 'Tipo' }];
export var conquerors = [{
        id: 1,
        name: 'Shitara',
        specie: 'Cat',
        planet: 'Thundera',
    }, {
        id: 2,
        name: 'Mun Ha',
        specie: 'Mumy',
        planet: '3 Earth',
    }];
export var headersConquerors = [{ id: 'ID' }, { name: 'Nome' }, { specie: 'Espécie' }, { planet: 'Planeta' }];
//# sourceMappingURL=table.js.map