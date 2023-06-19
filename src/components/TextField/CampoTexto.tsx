import React from 'react'

interface Props {
    campo: string
}

const CampoTexto: React.FC<Props> = props => {
    const long_ =
        props.campo === 'Senha'
            ? `insira sua ${props.campo}`
            : `insira seu ${props.campo}`

    return (
        <div className="flex flex-col">
            <p>{props.campo}</p>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    className="px-2 rounded"
                    placeholder={long_}
                />
            </div>
        </div>
    )
}

export default CampoTexto
