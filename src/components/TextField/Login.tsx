import React from 'react'
import CampoTexto from './CampoTexto'
import Header from '../Header'
import Link from 'next/link'
import ButtonLogin from '../Button/ButtonLogin'

const Login = () => {
    return (
        <div className="p-6 m-4 h-screen rounded-lg bg-zinc-100">
            {/* <Header /> */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-zinc-900 text-4xl font-light mb-2 text-center">
                        Olá! Faça seu login
                    </h1>
                    <p className="text-zinc-400 text-center">
                        Faça login com seus dados de acesso 🔑✨
                    </p>

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
            <div className="mt-11 items-right rounded-xl mb-5 border-b-[4px] border-green-300">
                <img
                    src="https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F5nMCeI4EPCB4hs90HRomek%2F5159bc4fec661542ce018048d40883a1%2Fdesconto_troca_de_carro_-_programa_de_benef__cios_creditas.jpg&w=640&q=75"
                    className="rounded-xl h-auto w-auto"
                ></img>
            </div>
        </div>
    )
}

export default Login
