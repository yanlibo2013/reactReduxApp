//初始化数据
const initialState = {
    title: ['React', 'Redux', 'Angular', 'Vue']
}

//创建reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TAB_CHANGE':
            return Object.assign({}, state, {
                active: action.active
            })
        default :
            return state
    }
}

export default appReducer