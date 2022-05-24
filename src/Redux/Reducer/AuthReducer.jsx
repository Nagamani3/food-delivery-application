let InitialState = {
    Createusers : [],
    CartAdd:[0],
    Cartdelete:[0]
}


const AuthReducer = (state=InitialState,action) => {
   switch (action.type) {
     case "CREATE_USER":
           return {
               ...state,
               Createusers:action.payload,
            
       }

       case "LOGIN_USER":
         return {
           ...state,
           loginuser:action.payload
         }

         case "GOOGLE_USER":
          return {
            ...state,
            google:action.payload
          }

          case "Phone_Auth":
      return {
        ...state,
        PhoneAuth: action.payload,
      }

      case "CARTINCREMENT":
      return {
        ...state,
        CartAdd : parseInt(action.payload) + parseInt(state.CartAdd)
      };

      case "CARTDECREMENT":
        return {
          ...state,
          cartdelete : parseInt(action.payload) - parseInt(state.Cartdelete)
        };

     default:
    return state
   }
}

export default AuthReducer;
