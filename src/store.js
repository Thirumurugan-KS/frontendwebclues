import {  createStore , combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools   } from "redux-devtools-extension"
import { addUserreducer, showUserreducer } from "./reducer/userReducer"

const reducer = combineReducers({

    addUser : addUserreducer,
    showUser : showUserreducer
})


const middleware = [thunk]

const initial = {
    addUser : {},
    showUser : {
        users : []
    }
}

const store = createStore(reducer , initial , composeWithDevTools(applyMiddleware(...middleware)))

export default store