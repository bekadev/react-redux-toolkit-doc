import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducer/UserSlice";

function App() {
    const {users, error, isLoading, count} = useAppSelector(state => state.userReducer)
    const {increment, decrement} = userSlice.actions
    const dispatch = useAppDispatch()

    const click = () => {
        dispatch(increment(1))
    }
    const unClick = () => {
        dispatch(decrement(1))
    }
   return (
    <div>
        <h1>{count}</h1>
        <button onClick={click}>inc</button>
        <button onClick={unClick}>decr</button>
    </div>
  );
}

export default App;
