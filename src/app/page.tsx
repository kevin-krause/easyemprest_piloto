import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            {/* <Header /> */}
            <div>
                <div className="p-6 m-4 h-screen rounded-lg border-[4px] border-green-400 bg-zinc-100">
                    <h1 className="text-zinc-900 text-4xl font-light mb-2 text-left">
                        EasyEmprest
                    </h1>
                    <p className="text-zinc-500 text-left">
                        Auxiliamos na conquista dos seus sonhos 🔑✨
                    </p>
                    <div className="mt-7">
                        <Link
                            className="mr-[10px] text-zinc-900 p-4 bg-green-300 rounded-xl"
                            href={'/login'}
                        >
                            Já tem uma conta? Login
                        </Link>
                        <Link
                            className="mr-[10px] bg-zinc-900 p-4 text-green-300 rounded-xl"
                            href={'/cadastro'}
                        >
                            Cadastre-se!
                        </Link>
                        <div className="mt-11 items-right border-b-[4px] rounded-xl border-green-300">
                            <img
                                src="https://assets.creditas.com/website-assets/images/1.0.0/footer/hand-smartphone-new-mobile@2x.webp"
                                className="rounded-xl h-auto w-auto"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
