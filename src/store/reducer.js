import API from './../api'
import axios from 'axios'

const initialState = {
  message: [],
  isLoading: true,
  loadingFailed:false,
  receiver_id: '',
  sender_id:'',
  errors:[],
  users:[],
  messages:'',
  isTyping:false,
};
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'getUser':{
      axios.request({
        method:'get',
        url:API+'/getUser',
        params:{
          logged_user:localStorage.getItem('id'),
        },
        })
        .then((res)=>{
        //console.log(res);
        return {
         users:res
        };

           })
        .catch(ex =>{
          return {
           errors:ex
          };

        })

   }
   case '+':{
   return {
    message:'hello world'
   };
 }

   case 'DECREMENT':
   return {
     count: state.count +1
   };
   case 'RESET':
     return {
       count: 0
     };
   default:
     return state;
 }
  return state;
}
