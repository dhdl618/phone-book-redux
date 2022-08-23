let initialState = {
    contactList:[],   // 연락처를 저장하는 state 리스트
    keyword : ""
}

function reducer(state=initialState, action) {
    const {type, payload} = action
    switch (type) {
        case "ADD_CONTACT":
            return {...state, contactList:[
                ...state.contactList, {
                    name: payload.name, 
                    phoneNum: payload.phoneNum
                }]
            }
        case "SHOW_FILTERED":
            return {...state, keyword : payload.keyword}
        default :
            return {...state}
    }
}

export default reducer