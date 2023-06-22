import React, { useState } from 'react'

interface Props {
    campo: string
    type: string
    onValueChange: (value: string) => void
}

const CampoTexto: React.FC<Props> = ({ campo, type, onValueChange }) => {
    const [value, setValue] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setValue(value)
        onValueChange(value)
    }

    return (
        <div className="p-2 border-[1px] border-zinc-200 rounded-lg mb-5">
            <input
                type={type}
                placeholder={campo}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default CampoTexto
