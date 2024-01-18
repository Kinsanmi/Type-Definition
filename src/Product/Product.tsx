import React, { useState } from 'react'
import { Value } from './Value';
import { flashSales } from '../Components/Data';

export type MyPerson = { 
    person: {
        text: string;
        price: string;
        discount: string;
        items: string;
        link: string;
        percentage: string;
        alt: string
    }[]
}



export const Product = () => {

    const [file, setFile] = useState<MyPerson["person"]>([{
        text: "Nova 2 IN 1 HAIR STRAIGHTENER AND CURLER.",
        price: "₦ 2,950",
        discount: "₦ 3,348",
        items: "80 items left",
        link: "",
        percentage: "-12%",
        alt: "Nova 2 IN 1 HAIR STRAIGHTENER AND CURLER.",    
    }])

    const [sales, setSales] = useState(flashSales);

    const salesList = (): JSX.Element =>{
        return (

            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", background: "#ccc"}}>
            {sales.map((item)=>{
                return (
                    <>
                    <div>{item.text}</div>
                    <div>{item.price}</div>
                    <div>{item.discount}</div>
                    <div>{item.items}</div>
                    </>
                )
            })}
            </div>
        )
    }

  return (
    <>
    <Value person={file}  />
    {salesList()}
    </>
  )
}
