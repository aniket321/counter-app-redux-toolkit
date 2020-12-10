import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, incrementAsyncAction, decrementAsyncAction, counterSelector } from './ducks';

function Counter({ count, incrementAction, decrementAction, incrementAsyncAction, decrementAsyncAction }) {
    return(
        <div>
            <span>Count: {count}</span>
            <br/>
            <button onClick={() => incrementAction()}>Increment</button>
            <br/>
            <button onClick={() => decrementAction()}>Decrement</button>
            <br/>
            <button onClick={() => incrementAsyncAction()}>Increment Async</button>
            <br/>
            <button onClick={() => decrementAsyncAction()}>Decrement Async</button>
        </div>
    )
}

const mapStateToProps = state => ({ count: counterSelector(state) })
const mapDispatchToProps = { incrementAction, decrementAction, incrementAsyncAction, decrementAsyncAction };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
