import React, { Component } from 'react'
import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';
export class ExpenseForm extends Component {
  render() {
    return (
    // htmlFor에는 무엇을 위한 라벨인지 표시하기 위해  해당하는 input의 id 이름 넣기
      <from>
        <div className='form-center'>
          <div className='form-group'>
            <label htmlFor='charge'>지출 항목</label>
            <input
             type='text'
             className='form-control'
             id='charge' 
             name='charge' 
             placeholder='예)렌트비'>
             </input>
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>비용</label>
            <input
             type='number'
             className='form-control'
             id='amount' 
             name='amount' 
             placeholder='예)백원'>
             </input>
          </div>
        </div>
        <button type='submit' className='btn'>
          제출
          <MdSend className='btn-icon'/>
        </button>
      </from>
    )
  }
}

export default ExpenseForm
