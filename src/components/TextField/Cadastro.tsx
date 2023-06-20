import React from 'react'
import CampoTexto from './CampoTexto'
import CampoTexto2 from './CampoTexto2'
import Header from '../Header'
import Link from 'next/link'
import ButtonLogin from '../Button/ButtonLogin'

const Login = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-zinc-900 text-4xl font-light mb-2 text-center">
                        Crie sua conta agora mesmo!
                    </h1>
                    <p className="text-zinc-400 text-center">
                        empréstimos de forma rápida e segura ✨
                    </p>
                    <span className="block border-b-[1px] border-zinc-200 w-auto h-px"></span>
                    <div className="mb-6">
                        <CampoTexto campo="email" />
                        <CampoTexto campo="senha" />
                        <CampoTexto2 campo="senha" />
                    </div>

                    <div className="flex justify-center">
                        {' '}
                        {/* Adicionada a classe "flex justify-center" */}
                        <ButtonLogin campo={'cadastro'} />
                    </div>

                    <p className="text-zinc-400 mt-5 text-sm text-center">
                        Já tem uma conta?{' '}
                        <Link
                            className="hover:text-zinc-900 hover:underline"
                            href={'/login'}
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
