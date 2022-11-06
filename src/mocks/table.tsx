import Badget from "@components/badget";

const person=
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
const Name = () =>{
    return <div className="flex items-center">
    <div className="h-10 w-10 flex-shrink-0">
    <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
        </div>
        <div className="ml-4">
    <div className="font-medium text-gray-900">{person.name}</div>
        <div className="text-gray-500">{person.email}</div>
        </div>
        </div>
}

const Title = ()=>{
    return <>
        <div className="text-gray-900">{person.title}</div>
        <div className="text-gray-500">{person.department}</div>
    </>
}

export const peoples = [{
    id:1,
    name: <Name/>,
    title: <Title/>,
    status: <Badget text='Ativo' />,
    role: person.role
}]

export const products = [{
    id:1,
    name: 'Coca-cola',
    price: 1.20,
    role: person.role
}]

export const headers = [{'name':'Nome'},{'title':"Titulo"},{'status':'Status'},{'role':'Tipo'}]

export const headersProduct = [{'name':'Nome'},{'price':'Preço'},{'role':'Tipo'}]


export const conquerors = [{
    id:1,
    name: 'Shitara',
    specie: 'Cat',
    planet: 'Thundera',
},{
    id:2,
    name: 'Mun Ha',
    specie: 'Mumy',
    planet: '3 Earth',
}]

export const headersConquerors = [{id:'ID'},{name:'Nome'},{specie:'Espécie'},{planet:'Planeta'}]
