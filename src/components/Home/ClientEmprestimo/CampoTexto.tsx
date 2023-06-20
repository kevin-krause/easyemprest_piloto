import React from 'react'

interface Props {
    campo: string
    type: string
}

const CampoTexto: React.FC<Props> = props => {
    return (
        <div className="p-2 border-[1px] border-zinc-200 rounded-lg mb-5">
            <input type={props.type} placeholder={props.campo} />
        </div>
    )
}

export default CampoTexto
