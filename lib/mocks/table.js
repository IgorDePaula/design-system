import Badget from "@components/badget";
import React from "react";
const person = {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const Name = () => {
    return React.createElement("div", { className: "flex items-center" },
        React.createElement("div", { className: "h-10 w-10 flex-shrink-0" },
            React.createElement("img", { className: "h-10 w-10 rounded-full", src: person.image, alt: "" })),
        React.createElement("div", { className: "ml-4" },
            React.createElement("div", { className: "font-medium text-gray-900" }, person.name),
            React.createElement("div", { className: "text-gray-500" }, person.email)));
};
const Title = () => {
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "text-gray-900" }, person.title),
        React.createElement("div", { className: "text-gray-500" }, person.department));
};
export const peoples = [{
        id: 1,
        name: React.createElement(Name, null),
        title: React.createElement(Title, null),
        status: React.createElement(Badget, { text: 'Ativo', variant: 'success' }),
        role: person.role
    }];
export const products = [{
        id: 1,
        name: 'Coca-cola',
        price: 1.20,
        role: person.role
    }];
export const headers = [{ 'name': 'Nome' }, { 'title': "Titulo" }, { 'status': 'Status' }, { 'role': 'Tipo' }];
export const headersProduct = [{ 'name': 'Nome' }, { 'price': 'Preço' }, { 'role': 'Tipo' }];
export const conquerors = [{
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
export const headersConquerors = [{ id: 'ID' }, { name: 'Nome' }, { specie: 'Espécie' }, { planet: 'Planeta' }];
//# sourceMappingURL=table.js.map