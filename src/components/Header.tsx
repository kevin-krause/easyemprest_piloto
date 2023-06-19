import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="flex p-6 bg-zinc-900 m-4 rounded-lg w-auto">
            <Link className="mr-[10px] text-zinc-100" href={'/'}>
                Home
            </Link>
            <Link className="mr-[10px] text-zinc-100" href={'/login'}>
                Login
            </Link>
        </div>
    )
}

export default Header
