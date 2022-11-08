"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersConquerors = exports.conquerors = exports.headersProduct = exports.headers = exports.products = exports.peoples = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const badget_1 = __importDefault(require("@components/badget"));
const person = {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const Name = () => {
    return (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "h-10 w-10 flex-shrink-0" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "h-10 w-10 rounded-full", src: person.image, alt: "" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "ml-4" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "font-medium text-gray-900" }, { children: person.name })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-gray-500" }, { children: person.email }))] }))] }));
};
const Title = () => {
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-gray-900" }, { children: person.title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-gray-500" }, { children: person.department }))] });
};
exports.peoples = [{
        id: 1,
        name: (0, jsx_runtime_1.jsx)(Name, {}),
        title: (0, jsx_runtime_1.jsx)(Title, {}),
        status: (0, jsx_runtime_1.jsx)(badget_1.default, { text: 'Ativo' }),
        role: person.role
    }];
exports.products = [{
        id: 1,
        name: 'Coca-cola',
        price: 1.20,
        role: person.role
    }];
exports.headers = [{ 'name': 'Nome' }, { 'title': "Titulo" }, { 'status': 'Status' }, { 'role': 'Tipo' }];
exports.headersProduct = [{ 'name': 'Nome' }, { 'price': 'Preço' }, { 'role': 'Tipo' }];
exports.conquerors = [{
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
exports.headersConquerors = [{ id: 'ID' }, { name: 'Nome' }, { specie: 'Espécie' }, { planet: 'Planeta' }];
//# sourceMappingURL=table.js.map