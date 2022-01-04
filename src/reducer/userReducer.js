export const addUserreducer = (state = {},action) =>{
    switch(action.type){
        case 'POST_INITIAL':
            return {
                loading : true
            }
        case 'POST_SUCCESS':
            return {
                loading : false,
                success : true,
                error : false
            }
        case 'POST_FAILURE':
            return {
                loading : false,
                error : true,
                success : true
            }
        default:
            return {
                ...state
            }
    }
}

export const showUserreducer = (state,action) =>{

     switch(action.type){
        case 'SHOW_INITIAL':
            return {
                loading : true
            }
        case 'SHOW_SUCCESS':
            return {
                loading : false,
                success : true,
                users : action.payload,
                error : false
            }
        case 'SHOW_FAILURE':
            return {
                loading : false,
                error : true,
                success : true
            }
        default:
            return {
                ...state
            }
    }

}