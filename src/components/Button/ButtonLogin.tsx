import React from 'react'

interface Props {
    campo: string
}

const ButtonLogin: React.FC<Props> = props => {
    const botao = props.campo === 'login' ? 'login' : 'cadastre-se'

    return (
        <div className="items-center mt-3">
            <a
                href="#"
                className="p-3 border-[1px] rounded-xl hover:bg-zinc-800 hover:text-zinc-100 shadow hover:shadow-lg"
            >
                {botao}
            </a>
        </div>
    )
}

export default ButtonLogin
