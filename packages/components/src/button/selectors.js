export default (state) => {
    console.log("==> Counter", state);

    return {
        path: state.router.location.pathname
    }
}
