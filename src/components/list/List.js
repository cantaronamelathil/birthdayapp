import React from 'react'

function List({people}) {
  return (
    <>
    {
    people.map((person)=>(
      
        <article className='person'key={person.id}>
           <img  scr={person.image}   alt="https://generated.photos/face/neutral-white-young-adult-male-with-short-brown-hair-and-brown-eyes--5e684c696d3b380006e46269"/>
           <div>
            <h4>
               {person.name}
            </h4>
            <p>
                {person.age}years
            </p>
           </div>

        </article>
      
    
    ))
}
    </>
  )
}

export default List;
