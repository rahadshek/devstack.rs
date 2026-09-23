DevStack

DevStack is a responsive React application where developers can explore technologies and build their own technology stack.

 Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

 Features

 Explore different technologies
 Add and remove technologies from your stack
 Fully responsive for mobile, tablet, and desktop


React Questions

1.JSX lets us write HTML-like code inside JavaScript/TypeScript. It makes React UI easier to write and understand.

2.Props are data passed from parent to child.State is data managed and changed inside a component.

3.useState stores changing data in a component. I used it to store the selected technologies.
const [Added, setAdded] = useState<ITechnology[]>([]);

4.useEffect runs side effects such as fetching data. In this project, I used use() and Suspense instead of useEffect to load data.json.

5.A unique key helps React identify each list item and update the UI efficiently.

6.It means showing different UI based on a condition.

7.The parent sends data through props.
The child can send changes back by calling a function passed through props.