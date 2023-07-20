// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {getBalance, getIncome, getExpenses} = props

  const balanceRes = getBalance > 0 ? getBalance : 0

  return (
    <div className="balance-display-container-style">
      <div className="balance-container container">
        <img
          className="balance-img-style"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="display-card-container">
          <p className="balance-para">Your Balance</p>
          <p data-testid="balanceAmount" className="balance-show-para">
            RS {balanceRes}
          </p>
        </div>
      </div>
      {/* container2 */}
      <div className="income-container container">
        <img
          className="balance-img-style"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="display-card-container">
          <p className="balance-para">Your Income</p>
          <p data-testid="incomeAmount" className="balance-show-para">
            RS {getIncome}
          </p>
        </div>
      </div>
      {/* container3 */}
      <div className="expense-container container">
        <img
          className="balance-img-style"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="display-card-container">
          <p className="balance-para">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance-show-para">
            RS {getExpenses}
          </p>
        </div>
      </div>

      {/* end */}
    </div>
  )
}

export default MoneyDetails
