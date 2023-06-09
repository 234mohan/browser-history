import './index.css'

const History = props => {
  const {userDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <p> {timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p> {title} </p>
      <p> {domainUrl} </p>
      <button onClick={onDelete} type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default History
