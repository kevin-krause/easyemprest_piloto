import React from 'react'
import CampoTexto from './CampoTexto'
import CampoTexto2 from './CampoTexto2'
import Header from '../Header'
import Link from 'next/link'
import ButtonLogin from '../Button/ButtonLogin'

const Login = () => {
    return (
        <div className="p-6 m-4 h-screen rounded-lg bg-zinc-100">
            {/* <Header /> */}
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-zinc-900 text-4xl font-light mb-2 text-center">
                        Crie sua conta agora mesmo!
                    </h1>
                    <p className="text-zinc-400 text-center">
                        empréstimos de forma rápida e segura ✨
                    </p>
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
                <div className="mt-11 items-right rounded-xl mb-5 border-b-[4px] border-green-300">
                    <img
                        src="https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F14YSQ2Ot0aiNbz9DlxO9pS%2Fd6abadd6183f9e72652cf3749f0ecbf9%2Fsolu____es_creditas_-_Compra.png&w=640&q=75"
                        className="rounded-xl h-auto w-auto"
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Login
