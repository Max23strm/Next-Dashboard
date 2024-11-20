import { CartCounter } from '@/app/shopping-cart'

export const metadata = {
    title: 'Counter'
}

const Counterpage = () => {

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Productos en el carrito de compra</span>
            <CartCounter value={30}/>
        </div>
    )
}

export default Counterpage