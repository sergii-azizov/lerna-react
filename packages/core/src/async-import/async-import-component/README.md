## asyncImportComponent
`asyncImportComponent` is a function component which lets you dynamically load any modules before rendering it into your app.

#### Usage
```JSX
import { Fragment, PureComponent } from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

const Button = asyncImportComponent(PACKAGE_NAMES.components, { component: 'Button' });

class asyncImportComponentScreen extends PureComponent {
    render() {
        return (
            <Fragment>
                <h2>asyncImportComponent</h2>
                <Button>Button</Button>
            </Fragment>
        );
    }
};

export default asyncImportScreen;
```


#### Properties
Name        | Type               | Required | Default     | Description       
:---------- | :----------------- | :------: | :---------: | :----------------------------
package     | `string`           | Y        | -           | The package which should be loaded
configs     | `object`           | -        | undefined   | Configuration objects


#### `component`
The property helps to get the particular component from loaded package. The property by default is `default`.

#### `server`
The property which helps set up a link to the static server where is located packages. If you have established the `server` to `https://rawcdn.githack.com/sergii-azizov/lerna-react/dist/` and  
execute hoc with properties `asyncImport(['components'])(SomeComponent)` then the request will be by URL `https://rawcdn.githack.com/sergii-azizov/lerna-react/dist/js/components.js`,
`https://rawcdn.githack.com/sergii-azizov/lerna-react/dist/css/components.css`. The property dy default getting from `STATIC_SERVER` constant.

#### `loadingComponent`
The component which will be displayed before the package will be loaded. 

#### `destroyOnUnmount`
If the property is `true` after unmount a component all dependency will be remove from DOM, Redux store and window.__APP__ etc. The property dy default is `false`.

#### `reducer`
if a package which you loaded have `rootReducer` module it will be automatically added to centralized Redux store. The property dy default is `rootReducer`.   


#### Glossary
- Package - chunk which consist of *.js and *.css files
- Module - exported things which can be reusable
