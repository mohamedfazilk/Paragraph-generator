import React, { useState } from 'react';
import data from './data'

function App() {
  //initial count is set to 0
  const [count, setCount] = useState(0);
  const [text, setText] = useState([])

  //when submitting the form for avoiding unnecessary rendering
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hi im here');
    setText(data)
    setCount(typeof count)//count is showing as a string
    console.log(count);

  }

 return <section className='section-center'>
   <h3>Did You Want how many Para</h3>
   <form className='lorem-form' onSubmit={handleSubmit}>
     <label htmlFor="amount">
       Paragraphs:
     </label>
     <input type="number" name='amount' id='amount' value={count} 
     onChange={(e)=>setCount(e.target.value)} />
      <button type='submit' className='btn'>Generator</button>
   </form>

   <article className='lorem-text'>
    {text.map((item,index)=>{
      return <p key={index}>{item}</p>

    })}
   </article>
  

 </section>
}

export default App;
