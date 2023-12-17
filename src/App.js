import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import './reset.css';

function App() {

  const [total, setTotal] = useState(0);

  function toggle(deduction) {
      return function(event) {
          const index = event.currentTarget;
          const isActive = index.classList.contains('active');

          if (!isActive) {
              index.classList.add('active');
              setTotal(prevTotal => prevTotal + deduction);
          } else {
              index.classList.remove('active');
              setTotal(prevTotal => prevTotal - deduction);
          }
      }
  }

    return (

            <Routes>
                <Route path="/moneyList" element={ 
                    <div className="App">
                        <div className="wrap">
                            <div className="inner">
                                <h1 className="title">오늘은 얼마?</h1>
            
                                <div className="box">
                                    <h2 className="sub-title">식비</h2>
                                    <ul className="list">
                                        <li className="item" onClick={toggle(7900)}>
                                            <button type='button' className="link">다이어트 만두</button>
                                        </li>
                                        <li className="item" onClick={toggle(10000)}>
                                            <button type='button' className="link">도시락</button>
                                        </li>
                                        {/* <li className="item" onClick={toggle}>
                                            <button type='button' className="link">기타</button>
                                        </li> */}
                                    </ul>
                                </div>
            
                                <div className="box">
                                    <h2 className="sub-title">커피값</h2>
                                    <ul className="list">
                                        <li className="item" onClick={toggle(4000)}>
                                            <button type='button' className="link">커피안먹음</button>
                                        </li>
                                    </ul>
                                </div>
            
                                <div className="box">
                                    <h2 className="sub-title">흡연</h2>
                                    <ul className="list">
                                        <li className="item" onClick={toggle(2500)}>
                                            <button type='button' className="link">흡연안함</button>
                                        </li>
                                    </ul>
                                </div>
            
                                <div className="result">
                                    <h2 className="result__title">오늘의 절약 금액</h2>
                                    <p className="result__amount"><span>{total}</span>원</p>
                                </div>
                            </div>
                        </div>
                </div> } />
            </Routes>
    );
}

export default App;
