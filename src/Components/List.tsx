import React from 'react'
import { Names as INames } from '../App';
import { Product } from '../Product/Product';



export const List:React.FC<INames>= ({people}) => {

    const renderList = () :JSX.Element =>{
        return (
            <>
            <div>
                {people.map((list)=>{
                    return (
                        <>
                        <div className='header'>
                            <img src={list.url} alt="" />
                            <h2>{list.names}</h2>
                            <h4>{list.age}</h4>
                            <h4>{list.note}</h4>
                        </div>
                        </>
                    )
                })}
            </div>
            </>
        )
    }


    const render = () =>{
        return (
            <>
            
            </>
        )
    }

  return (
    <>
    {renderList()}
    <Product />
    </>
  )
}
