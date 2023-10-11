# Alert

Customizable toast component for React.

## Installation

To start using the library, install it in your project:

```bash
npm install alert
```

Add the `<Toaster/>` component to your app, this component will take care of rendering all your toasts. 
After that, you can use the `toast()` function from anywhere in your app.

```jsx
import { Toaster, toast } from 'alert';

// ...

const App = () => {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('This is a toast.')}>Create a toast</button>
    </div>
  );
}
```

## Documentation

You can find out more about the API and implementation soon.
