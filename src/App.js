import './App.css';
import { useState ,useEffect} from 'react';

function App() {
  let [hasValue, setHasValue] = useState(false)
  let [arr, setArr] = useState(Array(9).fill(null))

  useEffect(()=>{
    console.log(arr)
  })

  const checkWinner = () => {

    let winnerCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let item of winnerCondition) {
      let [a, b, c] = item
      console.log(a,arr[a])
      console.log(b,arr[b])
      console.log(c,arr[c])
      // console.log(a,b,c)

      // if (arr[a] !== null && arr[a] === arr[b] && arr[a] === arr[c]) {
      //   console.log("Winner...!!!")
      //   return true
      // }
      // return false
    }
  }

  // const winner = checkWinner()
  // console.log(winner)

  const fnGetBoxValue = (eve) => {
    setHasValue(hasValue = !hasValue)
    if (hasValue) {
      eve.target.innerText = "O"
      arr[eve.target.id] = eve.target.innerText
    } else {
      eve.target.innerText = "X"
      arr[eve.target.id] = eve.target.innerText
    }

    let copyArr = [...arr]
    setArr(copyArr)
    checkWinner()


  }


  return (
    <div className="App">
      <h1 className='bg-danger text-center text-light p-2 mainHead'>Tic Tac Toe</h1>

      {/* {
        winner ? <h3>O is Winner</h3> : <> */}
          <div className='container-fluid'>
            <div className='board' onClick={fnGetBoxValue}>
              <div className='firstRow'>
                <div className='box frfe' id="0"></div>
                <div className='box frse' id="1"></div>
                <div className='box frte' id="2"></div>
              </div>

              <div className='secondRow'>
                <div className='box srfe' id="3"></div>
                <div className='box srse' id="4"></div>
                <div className='box srte' id="5"></div>
              </div>

              <div className='thirdRow'>
                <div className='box trfe' id="6"></div>
                <div className='box trse' id="7"></div>
                <div className='box trte' id="8"></div>
              </div>

            </div>
          </div>
        {/* </>
      } */}
    </div>
  );
}

export default App;
