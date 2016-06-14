import React,{Component, PropTypes} from 'react'


export default class Home extends Component {
    render() {
        const {title} = this.props
        return (
            <div>
                <ul id="tab-navs">
                    {title.map((item, key)=> {
                        return (
                            <li key={key}>
                                <a  href="#">
                                    {item}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

Home.propTypes = {
    title: PropTypes.array.isRequired
}
