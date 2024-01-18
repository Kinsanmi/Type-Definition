import React from 'react'
import { MyPerson as NewPerson } from './Product'


export const Value:React.FC<NewPerson> = ({person}) => {

    const property = (): JSX.Element =>{
        return (
            <>
            {person.map((names)=>{
                return (
                    <div style={{display: "flex"}}>
                        <p>{names.text}</p>
                        <p>{names.items}</p>
                        <p>{names.price}</p>
                        <p>{names.discount}</p>
                        <p>{names.percentage}</p>
                    </div>
                )
            })}
            </>
        )
    }

  return (
    <div>{property()}</div>
  )
}
