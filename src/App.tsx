import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducer/UserSlice";
import {fetchUsers} from "./store/reducer/ActionCreators";

function App() {
    // const {users, error, isLoading, count} = useAppSelector(state => state.userReducer)
    // const {increment, decrement} = userSlice.actions
    const {users, error, isLoading} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [ ])

    // const click = () => {
    //     dispatch(increment(1))
    // }
    // const unClick = () => {
    //     dispatch(decrement(1))
    // }
   return (
    <div>
        <div>
            {isLoading && <h1>padding...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
        {/*<h1>{count}</h1>*/}
        {/*<button onClick={click}>inc</button>*/}
        {/*<button onClick={unClick}>decr</button>*/}
    </div>
  );
}

export default App;
