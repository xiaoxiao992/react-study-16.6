import React, { useState, useEffect, useContext, useReducer, useRef, Component, Fragment } from 'react';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index.js'
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { ThemeContext, themes } from './theme/theme-context.js'
// import ThemedButton from './theme/themed-button'
import ThemeTogglerButton from './theme/theme-toggler-button';
import ThemeButton from './theme/hoc-withTheme-button'

// redux
// const store = createStore(reducer)
// console.log(store)

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Use Redux'
// })
// store.dispatch({
//   type: 'INCREMENT'
// })
// store.dispatch({
//   type: 'INCREMENT'
// })
// console.log(store.getState())
// applyMiddleware
function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)
    // call the next dispatch method in the middleware chain.
    const returnValue = next(action)
    
    console.log('state after dispatch', getState())
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}
const store = createStore(reducer, ['Use Redux'], applyMiddleware(logger))

store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware'
})
// (These lines will be logged by the middleware:)
// will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }
// state after dispatch: [ 'Use Redux', 'Understand the middleware' ]
console.log(store.getState())
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.textInput = null;

//     this.setTextInputRef = element => {
//       this.textInput = element;
//     };

//     this.focusTextInput = () => {
//       // 直接使用原生 API 使 text 输入框获得焦点
//       if (this.textInput) this.textInput.focus();
//     };
//   }

//   componentDidMount() {
//     // 渲染后文本框自动获得焦点
//     this.focusTextInput();
//   }

//   render() {
//     // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
//     // 实例上（比如 this.textInput）
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.setTextInputRef}
//         />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     );
//   }
// }
// function CustomTextInput(props) {
//   return (
//     <div>
//       <input ref={props.inputRef} />
//     </div>
//   )
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.focusTextInput = () => {
//       // 直接使用原生 API 使 text 输入框获得焦点
//       if (this.inputElement) this.inputElement.focus();
//     }
//   }
//   render() {
//     return (
//       <Fragment>
//          <CustomTextInput inputRef={el => this.inputElement = el} />
//          <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//       </Fragment>
      
//     )
//   }
// }
 
// function App(WrappedComponent) {
//   class LogProps extends Component {
//     componentDidUpdate(prevProps) {
//       console.log('old props: ', prevProps)
//       console.log('new props: ', this.props)
//     }

//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
//   return LogProps
// }

// class FancyButton extends Component {
//   focus() {

//   }
//   render() {
//     <div>
//       <input />
//       <button>HOC</button>
//     </div>
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// create-react-class
// var createReactClass = require('create-react-class')
// var SetIntervalMixin = {
//   componentWillMount: function() {
//     this.intervals = [];
//   },
//   setInterval: function() {
//     this.intervals.push(setInterval.apply(null, arguments));
//   },
//   componentWillUnmount: function() {
//     this.intervals.forEach(clearInterval);
//   }
// };

// var createReactClass = require('create-react-class');

// var App = createReactClass({
//   mixins: [SetIntervalMixin], // 使用混入
//   getInitialState: function() {
//     return {seconds: 0};
//   },
//   componentDidMount: function() {
//     this.setInterval(this.tick, 1000); // 调用混入的方法
//   },
//   tick: function() {
//     this.setState({seconds: this.state.seconds + 1});
//   },
//   render: function() {
//     return (
//       <p>
//         React has been running for {this.state.seconds} seconds.
//       </p>
//     );
//   }
// });
// context上下文
// 创建一个 theme Context,  默认 theme 的值为 light
// const ThemeContext = React.createContext('light');

// function ThemedButton(props) {
//   // ThemedButton 组件从 context 接收 theme
//   return (
//     <ThemeContext.Consumer>
//       {theme => <button {...props} theme={theme} />}
//     </ThemeContext.Consumer>
//   );
// }

// // 中间组件
// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }
// 一个使用到ThemedButton组件的中间组件
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       theme: themes.light
//     }
//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme: 
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark
//       }))
//     }
//   }
//   render() {
//     // ThemedButton 位于 ThemeProvider 内
//     // 在外部使用时使用来自 state 里面的 theme
//     // 默认 dark theme
//     return (
//       <page>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme}></Toolbar>
//         </ThemeContext.Provider>
//         <section>
//           <ThemedButton />
//         </section>
//       </page>
//     )
//   }
  
// }
// 允许 Consumer 更新 context ：
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//     // State 包含了 updater 函数 所以它可以传递给底层的 context Provider
//     this.state = {
//       theme: themes.light,
//       toggleTheme: this.toggleTheme,
//     };
//   }

//   render() {
//     // 入口 state 传递给 provider
//     return (
//       <ThemeContext.Provider value={this.state}>
//         <Content />
//       </ThemeContext.Provider>
//     );
//   }
// }

// function Content() {
//   return (
//     <div>
//       <ThemeTogglerButton />
//       <ThemeButton />
//     </div>
//   );
// }
// HOC举例
// const withMouse = (Component) => {
//   return class extends React.Component {
//     state = {
//       x: 0,
//       y: 0
//     }
//     handleMouseMove = (event) => {
//       this.setState({
//         x: event.clientX,
//         y: event.clientY
//       })
//     }
//     render() {
//       return (
//         <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//           <Component  {...this.props} mouse={this.state} />
//         </div>
//       )
//     }
//   }
// }
// // appconnect是一个纯函数无状态组件
// const AppConnet = (props) => {
//   const { x, y } = props.mouse
//   return (
//     <div>
//       <h1>The mouse position is ({x}, {y})</h1>
//     </div>
//   )
// }

// const App = withMouse(AppConnet)
// React Render props 取代HOC
// class Mouse extends Component {
//   static propTypes = {
//     render: PropTypes.func.isRequired
//   }
//   state = { x: 0, y: 0 }

//   handleMouseMove = (event) => {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     })
//   }

//   render() {
//     return (
//       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//         {this.props.render(this.state)}
//       </div>
//     )
//   }
// }
// const App = () => (
//   <div style={{ height: '100vh' }}>
//     <Mouse render={({x, y}) => (
//       <h1>The mouse position is ({x}, {y})</h1>
//     )} />
//   </div>
// )
// 
// dangerouslySetInnerHTML函数
// function createMarkup() {
//   return {__html: 'First &middot; Second'};
// }

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }
// const App = () => (
//   <div>
//     <MyComponent />
//   </div>
// )
// hook开始研究
// function Example() {
//   const [count, setCount] = useState[0]
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// class App extends React.Component {
//   render() {
//     return (
//       <Example />
//     )
//   }
// }
// useState 保存组件状态
// function App() {
//   const [obj, setObject] = useState({
//     count: 0,
//     name: "alife"
//   });
//   return (
//     <div className="App">
//       Count: {obj.count}
//       <button onClick={() => setObject({ ...obj, count: obj.count + 1 })}>+</button>
//       <button onClick={() => setObject({ ...obj, count: obj.count - 1 })}>-</button>
//     </div>
//   );
// }
// useEffect 处理副作用
// let timer = null;
// function App() {
//   const [count, setCount] = useState(0)
//   // 第一个 useEffect 中，理解起来就是一旦 count 值发生改变，则修改 documen.title 值；
//   useEffect(() => {
//     document.title = "componentDidMount" + count;
//   }, [count])
//   // 而第二个 useEffect 中传递了一个空数组[]，这种情况下只有在组件初始化或销毁的时候才会触发，用来代替 componentDidMount 和 componentWillUnmount，慎用；
//   useEffect(() => {
//     //  
//     timer = setInterval(() => {
//       setCount(prevCount => prevCount + 1)
//     }, 1000)
//     // 一定注意下这个顺序：
//     // 告诉react在下次重新渲染组件之后，同时是下次执行上面setInterval之前调用
//     return () => {
//       document.title = "componentWillUnmount";
//       clearInterval(timer);
//     };
//   }, [])
//   // 还有另外一个情况，就是不传递第二个参数，也就是useEffect只接收了第一个函数参数，代表不监听任何参数变化。每次渲染DOM之后，都会执行useEffect中的函数
//   return (
//     <div>
//       Count: {count}
//       <button onClick={() => clearInterval(timer)}>clear</button>
//     </div>
//   );
// }
// useContext使用方法---React createContext
// 传递给 useContext 的是 context 而不是 consumer，
// 返回值即是想要透传的数据了。用法很简单，使用 useContext 
// 可以解决 Consumer 多状态嵌套的问题。
// const colorContext = React.createContext('gray')

// function Bar() {
//   const color = useContext(colorContext)
//   return <div>{color}</div>
// }
// function Foo() {
//   return <Bar />
// }

// function App() {
//   return (
//     <colorContext.Provider value={"blue"}>
//       <Foo />
//     </colorContext.Provider>
//   )
// }
// useReducer
// useReducer 这个 Hooks 在使用上几乎跟 Redux/React-Redux 一模一样，
// 唯一缺少的就是无法使用 redux 提供的中间件。
// const initialState = {
//   count: 0
// };

// function reducer(state, action) {
//   switch(action.type) {
//     case "increment":
//       return { count: state.count + action.payload };
//     case "decrement":
//       return { count: state.count - action.payload };
//     default:
//       throw new Error();
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       count: {state.count}
//       <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
//         +
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
//         -
//       </button>
//     </>
//   )
// }
// useRef 保存引用值
// useRef 跟 createRef 类似，都可以用来生成对 DOM 对象的引用
// ef 在所有 Render 过程中保持着唯一引用，
// 因此所有对 ref 的赋值或取值，拿到的都只有一个最终状态，而不会在每个 Render 间存在隔离。
function App() {
  let [name, setName] = useState('Nate')
  let nameRef = useRef()
  const submitButton = () => {
    setName(nameRef.current.value)
  }
  return (
    <div className='app'>
      <p>{name}</p>
      <div>
        <input ref={nameRef} type="text" />
        <button type='button' onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default App;
