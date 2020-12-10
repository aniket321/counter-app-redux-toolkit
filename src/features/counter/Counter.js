import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement, incrementAsync, decrementAsync } from './ducks';

function Counter({ increment, decrement }) {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return(
        <div>
            <span>Count: {count}</span>
            <br/>
            <button onClick={() => increment()}>Increment</button>
            <br/>
            <button onClick={() => decrement()}>Decrement</button>
            <br/>
            <button onClick={() => dispatch(incrementAsync())}>Increment Async</button>
            <br/>
            <button onClick={() => dispatch(decrementAsync())}>Decrement Async</button>
        </div>
    )
}

const mapDispatchToProps = { increment, decrement };

export default connect(null, mapDispatchToProps)(Counter);
