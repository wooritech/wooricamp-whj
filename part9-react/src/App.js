// 클래스형 컴포넌트로 컴포넌트 UI 만들기

import { Component } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {id: 1, charge: "렌트비", amount: 2000},
        {id: 2, charge: "교통비", amount: 400},
        {id: 3, charge: "식비", amount: 1200}
      ]
    }
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    this.setState({expenses: newExpenses});
  }

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
          {/*ExpenseForm */}
          <ExpenseForm/>
        </div>
        <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
          {}
          <ExpenseList
           initialExpenses={this.state.expenses}
           handleDelete={this.handleDelete}
           />
        </div>
        <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출:
            <span>원</span>
          </p>
        </div>
      </main>
    )
  }
}
// App을 내보내기 (리액트가 시작되는 index.js에서 사용하기 위해)
// default를 사용하지 않는 경우에는 불러오는 장소에서 import App from './App';를 import {App} from './App'; 로 변경한다. 
export default App;
