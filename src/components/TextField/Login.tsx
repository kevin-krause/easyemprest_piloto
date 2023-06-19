import React from 'react'
import CampoTexto from './CampoTexto'
import Header from '../Header'
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <div className="p-6 rounded-lg bg-zinc-200 w-auto m-4 flex flex-col items-center">
                    <div className="mb-4">
                        <CampoTexto campo="Email" />
                    </div>
                    <div>
                        <CampoTexto campo="Senha" />
                    </div>
                    <p className="w-full text-ellipsis overflow-hidden my-3 text-zinc-600 text-center">
                        Ainda não tem uma conta?{' '}
                    </p>
                    <Link
                        className="text-green-700 bg-green-200 p-2 rounded-xl shadow-lg shadow-green-500/50 hover:shadow-green-900/50"
                        href={'/cadastro'}
                    >
                        Cadastre-se!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
