import axios from "axios"

 export const addUserAction = (formData) =>async(dispatch) =>{

        try{

            let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }


        dispatch({type: 'POST_INITIAL'})

        

        let data = await axios.post('https://webclues-backend.herokuapp.com/adduser',formData)

        
        dispatch({type : "POST_SUCCESS"})

        dispatch(showUserAction())

        }
        catch(error){


            dispatch({ type : "POST_FAILURE"})

        }

        
        
        

    }


 export const showUserAction = () =>async(dispatch) =>{

        try{



        dispatch({type: 'SHOW_INITIAL'})

        

        let {data} = await axios.get("https://webclues-backend.herokuapp.com/showuser")

        

        
        dispatch(
            {
                type : "SHOW_SUCCESS",
                payload : data
        }
            )

        }
        catch(error){


            dispatch({ type : "SHOW_FAILURE"})

        }

        
        
        

    }
