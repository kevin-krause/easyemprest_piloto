import Header from '@/components/Header'
import Home from '@/components/Home/Home'
import React from 'react'

const home = () => {
    return (
        <div>
            <Header />
            <div className="mt-6">
                <Home />
            </div>
        </div>
    )
}

export default home
