// Write your code here
import {useState} from 'react'
import './index.css'

const FruitsCounter = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const onIncrement1 = () => {
    setCount1(prevCount => prevCount + 1)
  }
  const onIncrement2 = () => {
    setCount2(prevCount => prevCount + 1)
  }

  return (
    <div className="background-container">
      <div className="card-container-1">
        <h1 className="heading">
          Bob ate <span className = "span-element"> {count1} </span> mangoes <span className = "span-element"> {count2} </span>{' '}
          bananas
        </h1>
        <div className="card-container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            className="image"
            alt="mango"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            className="image"
            alt="banana"
          />
        </div>
        <div className="card-container">
          <button className="button" onClick={onIncrement1}>
            Eat Mango
          </button>
          <button className="button" onClick={onIncrement2}>
            Eat Banana
          </button>
        </div>
      </div>
    </div>
  )
}

export default FruitsCounter
