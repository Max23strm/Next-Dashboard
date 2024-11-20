"use client"
import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

export interface CounterResponse {
    count: number;
}

interface Props {
    value?: number
}

const getApiCounter = async() : Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then (res => res.json());

    return data
}

export const CartCounter = ({ value = 10} : Props) => {

    const count = useAppSelector( state => state.counter.count);
    const dispatch = useAppDispatch()


    useEffect(()=>{
        getApiCounter()
            .then(( { count }) => dispatch( initCounterState(count) ))
    },[value, dispatch])

    return (
        <>
            <span className='text-9xl'>{count}</span>

            <div className='flex flex-row gap-2'>
                <button 
                    onClick={()=>dispatch(substractOne())}
                    className='flex itemns-center justify-center p-2 rounded-xl bg-stone-900 text-white hover:bg-stone-600 transition-all w-[100px]'
                    >
                    -1
                </button>
                <button 
                    onClick={()=>dispatch(addOne())}
                    className='flex itemns-center justify-center p-2 rounded-xl bg-stone-900 text-white hover:bg-stone-600 transition-all w-[100px]'
                >
                    +1
                </button>
            </div>
            <div className='flex flex-row gap-2 mt-2'>
                <button 
                    onClick={()=>dispatch(addOne())}
                    className='flex itemns-center justify-center p-2 rounded-xl bg-stone-900 text-white hover:bg-stone-600 transition-all w-[210px]'
                >
                    Reiniciar
                </button>
            </div>
        </>
    )
}
