import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiAperture, FiGlobe, FiDivideSquare, FiCircle, FiHeart    } from "react-icons/fi";
import { SidebarMenuItem } from '../index';

const navBarElements = [
    {
        icon: <FiGlobe/>,
        path:'/dashboard/main',
        subtitle: 'Visualización',
        title: 'Dashboard'
    },
    {
        icon: <FiDivideSquare/>,
        path:'/dashboard/counter',
        subtitle: 'Contador Client Side',
        title: 'Contador',
    },
    {
        icon: <FiCircle/>,
        path:'/dashboard/pokemons',
        subtitle: 'Estáticos',
        title: 'Pokemons',
    },
    {
        icon: <FiHeart />,
        path:'/dashboard/favorites',
        subtitle: 'Global state',
        title: 'Favoritos',
    },
]

export const Sidebar = () => {



    return (
        <div id="menu" className="bg-stone-900 min-h-screen z-10 text-slate-300 left-0 overflow-y-scroll w-[400px]">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    <FiAperture className='mr-2'/>
                    <span>
                        Dash
                    </span>

                    <span className="text-green-500">
                        23
                    </span>.
                </h1>
                <p className="text-lime-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-lime-500">Welcome back,</p>
                <Link href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" width={'32'} height={'32'} src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt=""/>
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Max Ovejak
                    </span>
                </Link>
            </div>
            <div id="nav" className="w-full px-6">
                { navBarElements.map( element  => <SidebarMenuItem {...element} key={`${element.path}`}/> ) }

                
            </div>
        </div>
    )
}
