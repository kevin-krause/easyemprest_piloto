import React, { useState } from 'react'

interface DataItem {
    id: number
    cpf: string
    nome: string
    endereco: string
    valor: number
    status: string
}

const Admin: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([
        {
            id: 1,
            cpf: '1234567890',
            nome: 'Fulano de Tal',
            endereco: 'Rua A, 123',
            valor: 100.0,
            status: 'pendente'
        },
        {
            id: 2,
            cpf: '0987654321',
            nome: 'Ciclano da Silva',
            endereco: 'Avenida B, 456',
            valor: 200.0,
            status: 'pendente'
        }
        // Add more example data here, if necessary
    ])

    const handleApprove = (id: number) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, status: 'aprovado' }
            }
            return item
        })
        setData(updatedData)
    }

    const handleReject = (id: number) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, status: 'reprovado' }
            }
            return item
        })
        setData(updatedData)
    }

    const handleDelete = (id: number) => {
        const updatedData = data.filter(item => item.id !== id)
        setData(updatedData)
    }

    const handleEdit = (id: number) => {
        console.log(`Edit row with ID ${id}`)
    }

    return (
        <div className="p-6 m-4 w-auto bg-white border border-gray-200 rounded-lg">
            <table className="gri grid-rows-7 items-center text-left">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4">ID</th>
                        <th className="py-2 px-4">CPF</th>
                        <th className="py-2 px-4">Nome</th>
                        <th className="py-2 px-4">Endereço</th>
                        <th className="py-2 px-4">Valor</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id} className="border-t border-gray-200">
                            <td className="py-2 px-4">{item.id}</td>
                            <td className="py-2 px-4">{item.cpf}</td>
                            <td className="py-2 px-4">{item.nome}</td>
                            <td className="py-2 px-4">{item.endereco}</td>
                            <td className="py-2 px-4">{item.valor}</td>
                            <td className="py-2 px-4">{item.status}</td>
                            <td className="py-2 px-4">
                                <button
                                    onClick={() => handleApprove(item.id)}
                                    className="btn-action bg-green-500 text-white"
                                >
                                    Aprovar
                                </button>
                                <button
                                    onClick={() => handleReject(item.id)}
                                    className="btn-action bg-red-500 text-white"
                                >
                                    Reprovar
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="btn-action bg-red-500 text-white"
                                >
                                    Excluir
                                </button>
                                <button
                                    onClick={() => handleEdit(item.id)}
                                    className="btn-action bg-blue-500 text-white"
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin
