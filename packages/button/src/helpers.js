import { loadModule } from 'core';
import { STATIC_SERVER } from "../../../configs/static.serve.config.js";

export { withRender } from 'core';
export default loadModule({ server: STATIC_SERVER });
