'use client'
import React from 'react'
import { SimpleWidget } from '../index'
import { FiCoffee, FiDivide, FiHeart } from "react-icons/fi";
import { useAppSelector } from '@/store';


export const WidgetGrid = () => {
    const count = useAppSelector( state => state.counter.count);



    return (
        <div className="flex flex-wrap p-2 intems-center justify-center gap-2">
            <SimpleWidget label='Contador' subTitle='Cuenta actual' title={`${count}`} icon={<FiDivide size={30} />}/>
            <SimpleWidget label='Favoritos' subTitle='Pokémons guardados' title='20' icon={<FiHeart size={30}/>}/>
            <SimpleWidget title='20' />
        </div>
    )
}
