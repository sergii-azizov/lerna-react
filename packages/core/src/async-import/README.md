## asyncImport
`asyncImport` is a higher-order component (a function that creates a component) which lets you dynamically load any modules before rendering it into your app.

#### Simple Usage
```JSX
import { Fragment } from 'react';
import { PACKAGE_NAMES, asyncImport } from 'core';

const AsyncImportScreen = ({ components: { Button, FRUITS, sum } }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
            <h3>Imported constant: {FRUITS.APPLE}</h3>
            <h3>Imported function sum, result: {sum(5, 7)}</h3>
            <Button>Imported component</Button>
        </Fragment>
    );
};

export default asyncImport([PACKAGE_NAMES.components])(AsyncImportScreen);
```


#### Advanced Usage
```JSX
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PACKAGE_NAMES, asyncImport } from 'core';

import styles from './test.scss'

const AsyncImportScreen = ({ Button, Counter, decrement, increment }) => {
    return (
        <Fragment>
            <h2>AsyncImport</h2>
            <div className={styles.root}>
                <h3>Component with dynamic store from "components" package</h3>
                <Counter />
            </div>
            <div className={styles.root}>
                <h3>Imported Actions from "components" package</h3>
                <Button onClick={increment}>+1</Button>
                <Button onClick={decrement}>-1</Button>
            </div>
        </Fragment>
    );
};

const withConnect = ({ decrement, increment }) => connect(null, { decrement, increment });
const mapPackagesToProps = ({ components: { Button, Counter, decrement, increment }}) => ({ Button, Counter, decrement, increment });

export default asyncImport([PACKAGE_NAMES.components], { mapPackagesToProps, withConnect })(AsyncImportScreen);
```

#### Properties
Name        | Type               | Required | Default     | Description       
:---------- | :----------------- | :------: | :---------: | :----------------------------
packages    | `array`            | Y        | -           | The list of packages which should be loaded
configs     | `object`           | -        | undefined   | Configuration objects



#### `server`
The property which helps set up a link to the static server where is located packages. If you have established the `server` to `https://rawcdn.githack.com/sergii-azizov/lerna-react/dist/` and  
execute hoc with properties `asyncImport(['components'])(SomeComponent)` then the request will be by URL `https://rawcdn.githack.com/sergii-azizov/lerna-react/dist/components.js`,
`https://rawcdn.githack.com/sergii-azizov/lerna-react/dist/components.css`. The property dy default getting from `STATIC_SERVER` constant.

#### `destroyOnUnmount`
If the property is `true` after unmount a component all dependency will be remove from DOM, Redux store and window.__APP__ etc. The property dy default is `false`.

#### `reducer`
if a package which you loaded have `rootReducer` module it will be automatically added to centralized Redux store. The property dy default is `rootReducer`.   

#### `mapPackagesToProps`
It's a function helps us to reassign passed props to WrappedComponent. The property dy default is `undefined`. 

#### `withConnect`
It's a function helps us to wrapped `WrappedComponent` to connect higher order component from Redux and use `action creator` wrapped by `thunk` and 
passed as props to `WrappedComponent`. The property dy default is `undefined`. 

#### Glossary
- Package - chunk which consist of *.js and *.css files
- Module - exported things which can be reusable
