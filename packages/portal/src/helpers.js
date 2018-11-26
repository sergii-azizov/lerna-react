import { loadModule } from 'core';
import { STATIC_SERVER } from "../../../configs/static.serve.config.js";

export default loadModule({ server: STATIC_SERVER, destroyOnUnMount: true, loadingComponent: () => <div>loading</div> });
