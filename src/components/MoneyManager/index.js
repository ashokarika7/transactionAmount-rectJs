import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    type: 'INCOME',
    totalBalance: 0,

    totalIncome: 0,
    totalExpenses: 0,
  }

  updateAmounts = (type, amount) => {
    const {totalBalance, totalIncome, totalExpenses} = this.state
    const newBalance =
      type === 'INCOME' ? totalBalance + amount : totalBalance - amount
    const newIncome = type === 'INCOME' ? totalIncome + amount : totalIncome
    const newExpenses =
      type === 'EXPENSES' ? totalExpenses + amount : totalExpenses
    this.setState({
      totalBalance: newBalance,
      totalIncome: newIncome,
      totalExpenses: newExpenses,
    })
  }

  AddingAndRemovingAmount = () => {
    const {type, amountInput} = this.state
    const parsedAmount = parseInt(amountInput)
    if (type === 'INCOME') {
      this.updateAmounts('INCOME', parsedAmount)
    } else if (type === 'EXPENSES') {
      this.updateAmounts('EXPENSES', parsedAmount)
    }
  }

  onClickingDelete = (id, amountInput, type) => {
    const {transactionList} = this.state
    // const filteredList = transactionList.filter(eachItem => eachItem.id === id)
    const stateFilteredList = transactionList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({transactionList: stateFilteredList})

    const parsedAmount = parseInt(amountInput)

    if (type === 'INCOME') {
      this.setState(prevBalance => ({
        totalBalance: prevBalance.totalBalance - parsedAmount,
        totalIncome: prevBalance.totalIncome - parsedAmount,
      }))
    } else if (type === 'EXPENSES') {
      this.setState(prevBalance => ({
        totalBalance: prevBalance.totalBalance - parsedAmount,
        totalExpenses: prevBalance.totalExpenses - parsedAmount,
      }))
    }
  }

  onSubmittingForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, type} = this.state

    const newTransaction = {
      id: v4(),
      titleInput,
      amountInput,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      type: 'INCOME',
    }))

    this.AddingAndRemovingAmount()
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      transactionList,
      titleInput,
      amountInput,
      totalBalance,
      totalIncome,
      totalExpenses,
      type,
    } = this.state

    return (
      <div className="bg-container">
        {/* money manager title container */}
        <div className="money-manager-bg-container">
          <h1 className="manager-title">Hi, Richard</h1>
          <p className="manager-para">
            Welcome back to your
            <span className="manager-span-el"> Money Manager</span>
          </p>
        </div>
        {/* Balance Display container */}
        <div className="balance-display-container">
          <MoneyDetails
            getBalance={totalBalance}
            getIncome={totalIncome}
            getExpenses={totalExpenses}
          />
        </div>
        {/* final container */}
        <div className="final-bg">
          <form onSubmit={this.onSubmittingForm} className="form-bg">
            <h1 className="form-title">Add Transaction</h1>
            {/* label1 */}
            <label className="title-label" htmlFor="title">
              TITLE
            </label>
            <input
              value={titleInput}
              onChange={this.onChangeTitle}
              className="title-style"
              id="title"
              placeholder="TITLE"
              type="title"
            />
            {/* label2 */}
            <label className="title-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              value={amountInput}
              onChange={this.onChangeAmount}
              className="title-style"
              id="amount"
              placeholder="AMOUNT"
              type="title"
            />
            {/* SELECT */}
            <label className="title-label" htmlFor="type">
              TYPE
            </label>
            <select
              value={type}
              onChange={this.onChangeType}
              className="title-style select-style"
              id="type"
            >
              {transactionTypeOptions.map(eachItem => (
                <option key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button className="btn-el" type="submit">
              Add
            </button>
          </form>

          <div className="History-container">
            <h1 className="form-title">History</h1>
            <div className="history-card-container">
              <div className="hitory-headings-display">
                <p className="display-style">Title</p>
                <p className="display-style">Amount</p>
                <p className="display-style">Type</p>
              </div>
            </div>
            <ul className="history-ul-style">
              {transactionList.map(eachItem => (
                <TransactionItem
                  onClickingDelete={this.onClickingDelete}
                  key={eachItem.id}
                  transactionDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* end */}
      </div>
    )
  }
}

export default MoneyManager
