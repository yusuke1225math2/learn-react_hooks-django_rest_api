import React, {useState, useEffect} from 'react'

// あるステートが変化したときだけ実行される
const BasicUseEffect = () => {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState('')

  useEffect(() => {
    console.log("useEffect invoked")
    // buttonがクリックされるたびに実行されている(レンダリングのたびに実行されている)
  },[count])
  // []を第2引数にしておけば初回レンダリングだけ実行される
  // 第2引数で指定したステートが変化したときだけ実行される

  return (
    <div>
      <button onClick={() => setCount(prevCount=>prevCount+1)}>Click {count}</button>
      <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
    </div>
  )
}

export default BasicUseEffect
