import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActionCreators from './TodoActionCreators'
console.log(TodoActionCreators)

class TodoListContainer extends Component {
    constructor(props) {
        super(props)
        const { dispatch } = props
        // Here's a good use case for bindActionCreators:
        // You want a child component to be completely unaware of Redux.
        // We create bound versions of these functions now so we can
        // pass them down to our child later.
        this.bindActionCreators = bindActionCreators(TodoActionCreators, dispatch)
        console.log(this.boundActionCreators) 
    }
    componentDidMount() {
        // Injected by react-redux:
        let { dispatch } = this.props
        // Note: this won't work:
        // TodoActionCreators.addTodo('Use Redux')

        // You're just calling a function that creates an action.
        // You must dispatch the action, too!

        // This will work:
        let action = TodoActionCreators.addTodo('Use Redux')
        dispatch(action)

    }
    render() {
        // Injected by react-redux:
        let { todos } = this.props
    
        return <TodoList todos={todos} {...this.boundActionCreators} />
    
        // An alternative to bindActionCreators is to pass
        // just the dispatch function down, but then your child component
        // needs to import action creators and know about them.
    
        // return <TodoList todos={todos} dispatch={dispatch} />
      }
}
export default connect(state => ({ todos: state.todos }))(TodoListContainer)