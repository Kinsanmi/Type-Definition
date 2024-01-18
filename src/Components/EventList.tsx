import React, { useState } from 'react'
import { product } from './Data'
import { Names as Props } from '../App'
import { dataList } from './Data'


interface IProps {
    people: Props["people"]
    setNumber:  React.Dispatch<React.SetStateAction<{
        names: string;
        url: string;
        age: number;
        note?: string | undefined;
    }[]>>
}

export const EventList:React.FC<IProps> = () => {

    const [change, setChange] = useState({
        name: "Mike",
        height: 63
    })

    const [item, setItem] = useState(product)

    const [data, setData] = useState(dataList.productItems);


    // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    //     setItem({
    //         ...product,
    //     })
    // }
    


    const figure = ()=>{
        return (
            <>
            <div>
               <div>{data.map((data)=>{
                return (
                    <>
                    <div>
                        <div>{data.name}</div>
                        <div>{data.price}</div>
                    </div>
                    </>
                )
               })}</div>
            </div>
            </>
        )
    }

    const ProductList = () =>{
        return (
            <>
            {item && item.map((items)=>{
            return (
                <>
                <div>
                    <p>{items.price}</p>
                    <p>{items.text}</p>
                </div>
                </>
            )
        })}
        <button>click</button>
            </>
        )
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setChange({
            ...change,
            [e.target.name]: e.target.value 
        })
    }

  return (
    <div>
        <input type="text" name="" id="" onChange={handleChange} />
        {ProductList()}
        {figure()}
        
    </div>
  )
}
