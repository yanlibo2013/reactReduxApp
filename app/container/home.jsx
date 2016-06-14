import { connect } from 'react-redux'
import Home from '../component/home.jsx'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
       /* tabChange: (active) => {
            dispatch(tabChange(active))
        }*/
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)