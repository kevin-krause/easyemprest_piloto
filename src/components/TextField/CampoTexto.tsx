import React from 'react'

interface Props {
    campo: string
}

const CampoTexto: React.FC<Props> = props => {
    const long_ =
        props.campo === 'senha'
            ? `insira sua ${props.campo}`
            : `insira seu ${props.campo}`

    return (
        <div className="flex flex-col items-center w-full">
            {/* <p>{props.campo}</p> */}
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    className="mt-6 p-2 rounded-lg border-[1px] border-zinc-200"
                    placeholder={long_}
                />
            </div>
        </div>
    )
}

export default CampoTexto
