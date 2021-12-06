import { useState, useEffect } from "react";
import data from "./data";

function App() {
  // My state
  const [state, setState] = useState(0);
  const [current, setCurrent] = useState({});

  const filterUsers = (id) => {
    const currentUser = data.filter((user) => user.id === id);
    return currentUser[0];
  };

  // update state
  const incState = () => {
    if (state === 3) {
      setState(0);
      return;
    }
    setState(state + 1);
  };

  const decState = () => {
    if (state === 0) {
      setState(3);
      return;
    }
    setState(state - 1);
  };

  const randomState = () => {
    let randomUser = Math.floor(Math.random() * 4);
    console.log(randomUser);
    setState(randomUser);
  };

  // useEffect hook
  useEffect(() => {
    let user = filterUsers(state);
    setCurrent(user);
  }, [state]);

  return (
    <>
      {current ? (
        <>
          <h1>Our Reviews</h1>
          <Template
            current={current}
            increment={incState}
            decrement={decState}
            random={randomState}
          />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

const Template = ({ current, increment, decrement, random }) => {
  const { image, name, role, review } = current;
  return (
    <>
      <div className='container'>
        <img src={image} alt={name}></img>
        <h4 className='author'>{name}</h4>
        <h5 className='job'>{role}</h5>
        <article>
          <p className='review'>{review}</p>
        </article>
        <div className='btnContainer'>
          <button className='back' onClick={decrement}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 320 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
            </svg>
          </button>
          <button className=' forward' onClick={increment}>
            <svg
              style={{ transform: "rotate(180deg)" }}
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 320 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
            </svg>
          </button>
        </div>
        <button className='random' onClick={random}>
          Surprise Me
        </button>
      </div>
    </>
  );
};

export default App;
