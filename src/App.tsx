import { useEffect, useState } from 'react';
import './App.css';
import { List } from './Components/List';
import { EventList } from './Components/EventList';
import { PageList } from './Pagination/PageList';


export type Names = {
  people: {
    id?: number;
    names: string;
    url: string;
    age: number;
    note?: string;
  }[]
}

function App(): JSX.Element {


  const[loading, setLoading] = useState<boolean>(false);
  const [number, setNumber] = useState<Names["people"]>([
    {
      names: "Durant Junior",
      url: "",
      age: 32,
      note: "Excellent players",
    }
  ])

  const fetchData = async() =>{
    setLoading(true);
    try {
      const fetchResult = await fetch(``);
    } catch (error) {
      console.log(error)
    }finally {
      setLoading(false);
    }
  } 


  useEffect(()=>{
    fetchData()
  },[])

  const renderedList = () =>{
    if(loading){
      return <div>Loading...</div>
    }

    return (
      <>
      <h2>Typescript tutorials with jsx </h2>
      <List people={number} />
      <EventList people={number} setNumber={setNumber} />
      </>
    )
  }
  return (
    <div className="App">
      {renderedList()}
      <PageList />
    </div>
  );
}

export default App;
