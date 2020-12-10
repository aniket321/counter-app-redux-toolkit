import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync, decrementAsync, counterSelector } from './ducks';

function Counter({ count, increment, decrement, incrementAsync, decrementAsync }) {
    return(
        <div>
            <span>Count: {count}</span>
            <br/>
            <button onClick={() => increment()}>Increment</button>
            <br/>
            <button onClick={() => decrement()}>Decrement</button>
            <br/>
            <button onClick={() => incrementAsync()}>Increment Async</button>
            <br/>
            <button onClick={() => decrementAsync()}>Decrement Async</button>
        </div>
    )
}

const mapStateToProps = state => ({ count: counterSelector(state) })
const mapDispatchToProps = { increment, decrement, incrementAsync, decrementAsync };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
