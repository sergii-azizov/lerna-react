export default (state) => {
    console.log("==> ", state);

    return {
        path: state.router.location.pathname
    }
}
