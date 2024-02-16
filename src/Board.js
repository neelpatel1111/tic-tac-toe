import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Board = () => {

    let [data, setData] = useState([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ]);

    const reset = () => {
        setData([
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ])
        setTurn('X')
    }

    const [turn, setTurn] = useState('X');

    const displayWinner = (winner) => {
        toast(`'${winner}' WINS!!!`, {
            position: 'top-center',
            className: 'fs-3 text-center'
        })
        reset()
    }

    const displayDraw = () => {
        toast(`DRAW`, {
            position: 'top-center',
            className: 'fs-3  text-center'
        })
        reset()
    }

    const handleClick = (turn, n) => {

        if (data[n] === '') {
            data[n] = turn;
            setTurn(turn === 'X' ? 'O' : 'X')
            checkWinner();
        }

    }

    const checkWinner = () => {

        //ROW WIN CHECK
        if (data[0] !== '' && data[0] === data[1] && data[1] === data[2]) {
            displayWinner(data[0])
        }
        else if (data[3] !== '' && data[3] === data[4] && data[4] === data[5]) {
            displayWinner(data[3])
        }
        else if (data[6] !== '' && data[6] === data[7] && data[7] === data[8]) {
            displayWinner(data[6])
        }

        //COLUMN WIN CHECK
        else if (data[0] !== '' && data[0] === data[3] && data[3] === data[6]) {
            displayWinner(data[0])
        }
        else if (data[1] !== '' && data[1] === data[4] && data[4] === data[7]) {
            displayWinner(data[1])
        }
        else if (data[2] !== '' && data[2] === data[5] && data[5] === data[8]) {
            displayWinner(data[2])
        }

        //CROSS WIN CHECK
        else if (data[0] !== '' && data[0] === data[4] && data[4] === data[8]) {
            displayWinner(data[0])
        }
        else if (data[2] !== '' && data[2] === data[4] && data[4] === data[6]) {
            displayWinner(data[2])
        }
        else {
            if (!(data.includes(''))) {
                displayDraw();
            }
        }
    }

    return (
        <>
            <ToastContainer />
            {/* Title */}
            <div className="container w-50 mt-5 text-center text-danger">
                <h1>
                    <span className="border-bottom border-2 border-info">
                        T
                        <span className="text-info">
                            i
                        </span>
                        c
                    </span>
                    &nbsp;

                    <span className="border-bottom border-2 border-danger">
                        <span className="text-info">
                            T
                        </span>
                        a
                        <span className="text-info">
                            c
                        </span>
                    </span>
                    &nbsp;

                    <span className="border-bottom border-2 border-info">
                        T<span className="text-info">
                            o
                        </span>
                        e
                    </span>
                </h1>
            </div>

            {/* Turn and Reset */}
            <div className="container d-flex justify-content-between w-50 my-4 text-info fs-3">
                <span>Turn : <span className="text-danger">{turn}</span></span>
                <button className="btn btn-outline-danger border-2 text-info" onClick={reset}>Reset</button>
            </div>

            {/* Board */}
            <div className="container w-100">

                {/* row 1 */}
                <div className='d-flex m-auto justify-content-center' style={{ height: 20 + 'vh' }}>

                    <div className="btn border-0 border-end border-bottom border-2 border-info rounded-0 text-danger p-3"
                        onClick={() => handleClick(turn, 0)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[0]}
                    </div>

                    <div className="btn border-0 border-end border-bottom border-2 border-info rounded-0 text-danger p-3"
                        onClick={() => handleClick(turn, 1)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[1]}
                    </div>

                    <div className="btn border-0 border-bottom border-2 border-info rounded-0 text-danger p-3"
                        onClick={() => handleClick(turn, 2)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[2]}
                    </div>

                </div>

                {/* row 2 */}
                <div className='d-flex m-auto justify-content-center' style={{ height: 20 + 'vh' }}>
                    <div className="btn border-0 border-end border-bottom border-2 border-info rounded-0  text-danger p-3"
                        onClick={() => handleClick(turn, 3)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[3]}
                    </div>
                    <div className="btn border-0 border-end border-bottom border-2 border-info rounded-0 text-danger p-3"
                        onClick={() => handleClick(turn, 4)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[4]}
                    </div>
                    <div className="btn border-0 rounded-0 border-2 border-info border-bottom text-danger p-3"
                        onClick={() => handleClick(turn, 5)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[5]}
                    </div>
                </div>

                {/* row 3 */}
                <div className='d-flex m-auto justify-content-center' style={{ height: 20 + 'vh' }}>
                    <div className="btn border-0 border-end border-2 border-info rounded-0 text-danger p-3"
                        onClick={() => handleClick(turn, 6)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[6]}
                    </div>
                    <div className="btn border-0 border-end border-2 border-info rounded-0 text-danger p-3"
                        onClick={() => handleClick(turn, 7)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[7]}
                    </div>
                    <div className="btn border-0 border-2 border-info rounded-0 text-danger p-3"
                        onClick={() => handleClick(turn, 8)}
                        style={{ width: 20 + 'vh', fontSize: '10vh' }}>
                        {data[8]}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Board
