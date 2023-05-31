import { createContext, useContext, useReducer } from 'react';

const themeContext = createContext<string>('ligth');

const reducer = (
 state: { age: number },
 action: { type: 'add'; overload?: any }
): { age: number } => {
 return state;
};

const Child = () => {
 const [state, dispatch] = useReducer(reducer, { age: 24 });
 const theme = useContext(themeContext);
 return <div onClick={() => dispatch({ type: 'add' })}></div>;
};

const Parent = () => {
 return (
  <themeContext.Provider value='light'>
   <Child></Child>
  </themeContext.Provider>
 );
};

export default {};
