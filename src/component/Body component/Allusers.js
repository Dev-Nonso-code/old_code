import  axios  from 'axios'
import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Fetchinguser,Fetchingsuccessful,Fetchingfailed} from '..//../redux/Userslice'

const Alluser = () => {
    const {alluser, isfetching} = useSelector(state=>state.userslice)
    console.log(isfetching);
    console.log(alluser);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Fetchinguser())
    //   axios.get("http://localhost:5100/log")
      axios.get("http://localhost:5100/log/signup")
      .then((res)=> {
        dispatch(Fetchingsuccessful(res.data))
       console.log(res);
    }).catch((err)=>{
        dispatch(Fetchingfailed(err))
        console.log(err);
    })
    }, [dispatch])
    
  return (
    <div>
       {isfetching? "loading ..." : alluser.map((el, index)=>(
        <>
        <div key={index}>
        <h1>{el.name}</h1>
        <h1>{el.age}</h1>
        </div>
        </>
       ))

       }
    </div>
  )
}

export default Alluser