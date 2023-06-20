import React from 'react'
import Emprestimo from './ClientEmprestimo/Emprestimo'

const Home = () => {
    return (
        <div>
            <div>
                <h1 className="text-zinc-900 text-4xl font-light mb-2">
                    Inicie sua simulação
                </h1>
                <p className="text-zinc-400">
                    Os dados abaixo serão utilizados para persinalizar sua
                    oferta 🪄
                </p>
                <div className="mt-7">
                    <Emprestimo />
                </div>
            </div>
        </div>
    )
}

export default Home
