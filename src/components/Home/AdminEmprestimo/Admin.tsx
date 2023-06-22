import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface DataItem {
    id_client: string
    cpf: string
    nome: string
    endereco: string
    valor: number
    status: string
    data_solicitado: string
}

const Admin: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/clientes/'
                )
                setData(response.data)
            } catch (error) {
                console.error('Erro ao buscar os dados da API:', error)
            }
        }

        fetchData()
    }, [])

    const handleApprove = async (id_client: string) => {
        try {
            await axios.patch(`http://127.0.0.1:8000/clientes/${id_client}/`, {
                status: 'aprovado'
            })
            const updatedData = data.map(item =>
                item.id_client === id_client
                    ? { ...item, status: 'aprovado' }
                    : item
            )
            setData(updatedData)
        } catch (error) {
            console.error('Erro ao atualizar o status:', error)
        }
    }

    const handleReject = async (id_client: string) => {
        try {
            await axios.patch(`http://127.0.0.1:8000/clientes/${id_client}/`, {
                status: 'reprovado'
            })
            const updatedData = data.map(item =>
                item.id_client === id_client
                    ? { ...item, status: 'reprovado' }
                    : item
            )
            setData(updatedData)
        } catch (error) {
            console.error('Erro ao atualizar o status:', error)
        }
    }

    const handleDelete = async (id_client: string) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/clientes/${id_client}/`)
            const updatedData = data.filter(
                item => item.id_client !== id_client
            )
            setData(updatedData)
        } catch (error) {
            console.error('Erro ao excluir o item:', error)
        }
    }

    const handleEdit = (id_client: string) => {
        console.log(`Editar linha com ID ${id_client}`)
    }

    const formatCurrency = (value: number): string => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    const formatDataSolicitado = (data_solicitado: string): string => {
        const parsedDate = new Date(data_solicitado)
        return format(parsedDate, 'dd/MM/yyyy HH:mm:ss', {
            locale: ptBR,
            timeZone: 'America/Sao_Paulo'
        })
    }

    return (
        <div className="p-6 m-4 w-auto bg-white border border-gray-200 rounded-lg flex justify-center items-center">
            <table className="gri grid-rows-1 text-left">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4">Data</th>
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
                        <tr
                            key={item.id_client}
                            className="border-t border-gray-200"
                        >
                            <td className="py-2 px-4">
                                {formatDataSolicitado(item.data_solicitado)}
                            </td>
                            <td className="py-2 px-4">{item.cpf}</td>
                            <td className="py-2 px-4">{item.nome}</td>
                            <td className="py-2 px-4">{item.endereco}</td>
                            <td className="py-2 px-4">
                                {formatCurrency(item.valor)}
                            </td>
                            <td className="py-2 px-4">{item.status}</td>
                            <td className="py-2 px-4">
                                <button
                                    onClick={() =>
                                        handleApprove(item.id_client)
                                    }
                                    className="btn-action bg-green-500 text-white p-1 rounded-lg text-sm m-1"
                                >
                                    Aprovar
                                </button>
                                <button
                                    onClick={() => handleReject(item.id_client)}
                                    className="btn-action bg-red-500 text-white p-1 rounded-lg text-sm m-1"
                                >
                                    Reprovar
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id_client)}
                                    className="btn-action bg-zinc-500 text-white p-1 rounded-lg text-sm m-1"
                                >
                                    Excluir
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
