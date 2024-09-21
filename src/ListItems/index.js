import {Component} from 'react'
import './index.css'

class ListItems extends Component {
  render() {
    const {value} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = value
    return (
      <li className="li">
        <div className="item-flex">
          <div className="flexs">
            <p className="time">{timeAccessed}</p>
            <div className="flex">
              <img src={logoUrl} alt={title} className="img" />
              <p className="title">{title}</p>
              <p className="domin">{domainUrl}</p>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </div>
      </li>
    )
  }
}
export default ListItems
