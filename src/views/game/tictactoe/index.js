import { useEffect, useState } from 'react'
import './index.css'

const Square = (props) => {
  console.log("== 变更");
  return (
    <div className="square-box" onClick={() => props.clickSquare(props.index)}>
      { props.content }
    </div>
  )
}

const Tictactoe = () => {
  const [squareList, setSquareList] = useState([
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' },
    { id: 4, content: '' },
    { id: 5, content: '' },
    { id: 6, content: '' },
    { id: 7, content: '' },
    { id: 8, content: '' },
    { id: 9, content: '' }
  ])

  const [times, setTimes] = useState(0);

  const clickSquare = (index) => {
    const _arr = JSON.parse(JSON.stringify(squareList));

    _arr[index]['content'] = times % 2 == 0 ? 'X' : 'O';
    setSquareList(_arr);
    setTimes(times + 1);
    // judgeWinner();
  }

  const judgeWinner = () => {
    const exampleList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const item of exampleList) {
      const [a, b, c] = item;
      const first = squareList[a]['content'];
      if (first && first == squareList[b]['content'] && first == squareList[c]['content']) {
        console.log(first + '胜利');
        break;
      }
    }
  }

  useEffect(() => {
    judgeWinner();
  })

  return (
    <div className='tictactoe'>
      {
        squareList.map((item, index) => {
          return (
            <Square content={item.content} index={index} clickSquare={clickSquare} key={item.id} />
          )
        })
      }
    </div>
  )
}

export default Tictactoe;