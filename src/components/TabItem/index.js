import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, onChangeTab} = props
  const {displayText, tabId} = tabDetails
  const activeClass = isActiveTab ? 'list-item active' : 'list-item'
  const changeActiveTab = () => {
    onChangeTab(tabId)
  }
  return (
    <li className={activeClass} onClick={changeActiveTab}>
      <button type="button">
        <h3>{displayText}</h3>
      </button>
    </li>
  )
}

export default TabItem
