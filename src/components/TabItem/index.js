import './index.css'

const TabItem = props => {
  const {tabItemDetails, isActive, clickTabItem} = props
  const {displayText} = tabItemDetails

  const activeTabIdClassName = isActive ? 'active-tab-item' : ''

  const onTabItem = () => {
    const {tabId} = tabItemDetails
    clickTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-item ${activeTabIdClassName}`}
        onClick={onTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
