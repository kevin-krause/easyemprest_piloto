import React from 'react'
import CampoTexto from './CampoTexto'
import CampoTexto2 from './CampoTexto2'
import Header from '../Header'
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    <div className="mb-6">
                        <CampoTexto campo="Email" />
                    </div>
                    <span className="block border-b-[1px] border-zinc-200 w-auto h-px"></span>

                    <div>
                        <CampoTexto campo="senha" />
                        <CampoTexto2 campo="senha" />
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
