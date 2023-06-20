import React from 'react'
import CampoTexto from './CampoTexto'

const Emprestimo = () => {
    return (
        <div className="text-left">
            <CampoTexto campo="CPF" type="number" />
            <CampoTexto campo="Nome completo" type="text" />
            <CampoTexto campo="Endereço" type="text" />
            <CampoTexto campo="Valor desejado" type="text" />
        </div>
    )
}

export default Emprestimo
