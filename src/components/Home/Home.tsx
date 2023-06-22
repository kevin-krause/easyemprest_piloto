import React, { useState } from 'react'
import axios from 'axios'
import CampoTexto from './ClientEmprestimo/CampoTexto'

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>('')

    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [valor, setValor] = useState('')

    const handleFormSubmit = async (): Promise<void> => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/clientes/',
                {
                    cpf,
                    nome,
                    endereco,
                    valor: parseFloat(valor),
                    status: 'pendente'
                }
            )
            if (response.status === 201) {
                setMessage('Proposta enviada, aguarde retorno')
            }
        } catch (error) {
            console.error('Erro ao enviar a proposta:', error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <div className="text-left md:text-center">
                <h1 className="text-zinc-900 text-4xl font-light mb-2">
                    Inicie sua simulação
                </h1>
                <p className="text-zinc-400">
                    Os dados abaixo serão utilizados para personalizar sua
                    oferta 🪄
                </p>
                <div className="mt-7">
                    <div className="text-left">
                        <CampoTexto
                            campo="CPF"
                            type="number"
                            onValueChange={setCpf}
                        />
                        <CampoTexto
                            campo="Nome completo"
                            type="text"
                            onValueChange={setNome}
                        />
                        <CampoTexto
                            campo="Endereço"
                            type="text"
                            onValueChange={setEndereco}
                        />
                        <CampoTexto
                            campo="Valor desejado"
                            type="text"
                            onValueChange={setValor}
                        />
                    </div>
                    <div className="mt-10">
                        <button
                            onClick={handleFormSubmit}
                            className="p-3 border-[1px] rounded-xl bg-green-500 text-zinc-200 hover:bg-green-900 hover:text-zinc-100 shadow hover:shadow-lg"
                        >
                            Enviar 💸
                        </button>
                    </div>
                    {message && <p className="text-zinc-400 mt-4">{message}</p>}
                </div>
            </div>
        </div>
    )
}

export default Home
