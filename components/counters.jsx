import React, { Component } from 'react';
import Counter from './counter';
import '../css/counters.css'

class Counters extends Component {

    render() { 
        const {counters, onIncrement, onDecrement, onDelete, onReset} = this.props;
        return (
            <div className="counters">
              <button className="reset" onClick={onReset}>
                Reset
              </button>
                {counters.map(counter =>
                  <Counter
                    key={counter.id}
                    counter={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                  />
                )}
            </div>
          );
    }
}
 
export default Counters;