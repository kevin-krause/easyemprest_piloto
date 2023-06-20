import React from 'react'

interface Props {
    campo: string
}

const CampoTexto2: React.FC<Props> = props => {
    const long_ =
        props.campo === 'senha'
            ? `confirme sua ${props.campo}`
            : `insira seu ${props.campo}`

    console.log(long_)
    return (
        <div className="flex flex-col">
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

export default CampoTexto2
