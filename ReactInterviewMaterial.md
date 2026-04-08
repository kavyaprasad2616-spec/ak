
# ⚛️ React Interview Notes

## 1. What is React?

* **React** is a JavaScript library for building **UI components**
* Developed by Meta
* Uses **component-based architecture**
* Uses **Virtual DOM** for fast updates

---

## 2. Key Features

* Component-Based 🧩
* Virtual DOM ⚡
* JSX ✍️
* One-way data binding 🔄
* Hooks 🎣

---

## 3. JSX

* JSX = JavaScript + XML
* Allows writing HTML inside JS

```jsx
const element = <h1>Hello World</h1>;
```

Rules:

* Must return **single parent**
* Use `className` instead of `class`
* Close tags `<br />`

---

## 4. Components

### Functional Component (Most used)

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

### Arrow Function Component

```jsx
const Welcome = () => {
  return <h1>Hello</h1>;
};
```

---

## 5. Props

* Props = data passed from parent to child
* Props are **read-only**

```jsx
function User(props){
  return <h1>{props.name}</h1>;
}
```

---

## 6. State

* State = component's local data
* Managed using `useState`

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count+1)}>
      {count}
    </button>
  );
};
```

---

## 7. Hooks (Important for interviews)

### useState

Manages state

```js
const [data, setData] = useState()
```

### useEffect

Runs side effects

```js
useEffect(() => {
  console.log("Mounted");
}, []);
```

Dependency array:

* `[]` → run once
* `[count]` → run when count changes

---

## 8. Virtual DOM

* React creates **Virtual DOM**
* Compares with real DOM
* Updates only changed elements
* Improves performance ⚡

---

## 9. Event Handling

```jsx
<button onClick={handleClick}>Click</button>
```

---

## 10. Conditional Rendering

```jsx
{isLoggedIn ? <Home/> : <Login/>}
```

---

## 11. Lists & Keys

```jsx
const users = ["A","B","C"];

users.map((u,index) => (
  <li key={index}>{u}</li>
))
```

---

## 12. Controlled Components

```jsx
const [name,setName] = useState("");

<input
  value={name}
  onChange={(e)=>setName(e.target.value)}
/>
```

---

## 13. React Lifecycle (Hooks version)

| Phase   | Hook                         |
| ------- | ---------------------------- |
| Mount   | useEffect(() => {}, [])      |
| Update  | useEffect(() => {}, [state]) |
| Unmount | return cleanup               |

---

## 14. useRef

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

---

## 15. useContext

Used to avoid **prop drilling**

```jsx
const UserContext = createContext();
```

---

## 16. React Router (Basic)

```jsx
npm install react-router-dom
```

```jsx
<Route path="/" element={<Home/>}/>
```

---

## 17. Difference: Props vs State

| Props              | State          |
| ------------------ | -------------- |
| Read only          | Mutable        |
| Passed from parent | Managed inside |
| External data      | Internal data  |

---

## 18. Interview Quick Questions

**Q: What is React?**
UI library for building component-based interfaces.

**Q: Virtual DOM?**
Lightweight copy of real DOM for efficient updates.

**Q: Hooks?**
Functions that allow state in functional components.

**Q: Props vs State?**
Props = read-only, State = mutable.

---

## 19. Must Know Hooks (Most asked)

* useState ⭐
* useEffect ⭐
* useRef
* useContext
* useMemo
* useCallback

---

## 20. Folder Structure (Typical)

```
src
 ┣ components
 ┣ pages
 ┣ App.js
 ┣ index.js
```

---

## 🎯 Last-Minute Revision

* JSX rules
* useState
* useEffect
* Props vs State
* Virtual DOM
* Keys in list
* Controlled components

---

Want me to also give:

* React **coding interview questions**
* React **project explanations**
* React **advanced notes**

Just tell me 👍
