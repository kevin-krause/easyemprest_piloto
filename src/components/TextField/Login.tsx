import React from 'react'
import CampoTexto from './CampoTexto'
import Header from '../Header'
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center">
                <div className="">
                    <div className="mb-4">
                        <CampoTexto campo="Email" />
                    </div>
                    <div>
                        <CampoTexto campo="Senha" />
                    </div>
                    <p className="text-zinc-400 mt-5 text-sm text-center">
                        Ainda não tem uma conta?{' '}
                        <Link
                            className="hover:underline hover:text-zinc-700"
                            href={'/cadastro'}
                        >
                            Cadastre-se!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
