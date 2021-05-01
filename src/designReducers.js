const initialState = {
    designs:[
//         {id:1, name:'Project One', tshirtColor:'15000/views/front'},
//         {id:2, name:'Project two', tshirtColor:'15008/views/front'},
        // {id:2, name:'Project two', tshirtColor:'15009/views/front.jpg'},
        // {id:2, name:'Project two', tshirtColor:'15011/views/front.jpg'},
        // {id:2, name:'Project two', tshirtColor:'15013/views/front.jpg'},

    ]
}



const designReducers = (state=initialState,action) => {
    switch(action.type){


        case 'SAVE_DESIGN': 
        console.log("design is saved in the list", action.design)

        return{
            
            ...state,
            designs:[...state.designs, action.design]

        }


        case 'REMOVE_DESIGN':
            console.log("Remove action invoked")
            return{

                ...state,
                // payload:designs.filter((design)=> design.id !==design.id)

                designs: state.designs.filter((design) => design.id !== action.id)
            }
        

       

        default:
            return state;
    }
    // return state
}




export default designReducers
