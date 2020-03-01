import React,{Component} from 'react';
import Counter from './components/counters'
import NavBar from './components/navbar';
import './App.css';

class App extends Component{
   state = {
    counters:[
      {id:"1", value:0},
      {id:"2", value:0},
      {id:"3", value:0},
      {id:"4", value:0}
    ]
  }

  constructor(){
    super();
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

 
  
  onIncrement(counter){
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    this.setState({counters});
  }

  onDecrement(counter){
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;

    this.setState({counters});

  }

  onDelete(counter){
    const countersCopy = [...this.state.counters];
    const counters = countersCopy.filter(c=>c.id !== counter.id);

    this.setState({counters});
    
  }
  render(){
    const {counters} = this.state
    return (
      <React.Fragment>
      <NavBar counters={counters}/>
      <Counter 
        counters={counters}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        onDelete={this.onDelete}
      />
      </React.Fragment>
    );
  }
}

export default App;
