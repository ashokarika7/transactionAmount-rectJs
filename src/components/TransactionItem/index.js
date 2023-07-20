// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onClickingDelete} = props
  const {id, titleInput, amountInput, type} = transactionDetails

  const onClickDelete = () => {
    onClickingDelete(id, amountInput, type)
  }

  return (
    <li className="li-card-container">
      <p className="li-para">{titleInput}</p>
      <p className="li-para">Rs {amountInput}</p>
      <p className="li-para">{type}</p>
      <button
        data-testid="delete"
        onClick={onClickDelete}
        type="button"
        className="img-btn-el"
      >
        <img
          className="li-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
