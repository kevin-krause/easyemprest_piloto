import React from 'react'
import CampoTexto from './CampoTexto'
import Header from '../Header'
import Link from 'next/link'
import ButtonLogin from '../Button/ButtonLogin'

const Login = () => {
    return (
        <div className="">
            <Header />
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-zinc-900 text-4xl font-light mb-2 text-center">
                        Olá! Faça seu login
                    </h1>
                    <p className="text-zinc-400 text-center">
                        Faça login com seus dados de acesso 🔑✨
                    </p>
                    <span className="block border-b-[1px] border-zinc-200 w-auto h-px"></span>

                    <div className="mb-1">
                        <CampoTexto campo="Email" />
                    </div>
                    <div>
                        <CampoTexto campo="Senha" />
                    </div>

                    <div className="text-center mt-5">
                        {' '}
                        {/* Adicionada a classe "text-center" */}
                        <ButtonLogin campo={'login'} />
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
