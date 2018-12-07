## Microservice Architecture by Lerna + React + Redux...

- [X] Implement asyncImport(should be able to import all things from the packages)
- [X] Implement asyncImportComponent
- [X] Implement supporting of Redux code-splitting
- [X] Implement import all things including Redux actions
- [X] Implement feature toggle
- [X] Optimize load flow and recalculation
- [X] Implement ability to destroy Packages
- [X] Add Server
- [ ] Implement CI/CD process
- [ ] Design activity diagrams
- [ ] Unit tests 


#### Tech Notes
##### Redux code-splitting
https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application

##### Webpack 4 universal library target
https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target

##### Read this for an in-depth introduction to thunks in Redux.
https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559


### Glossary
- Package - chunk which consist of *.js and *.css files
- Module - exports things which can be reusable
