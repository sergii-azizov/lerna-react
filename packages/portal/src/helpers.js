import { lazy } from 'core';
import { STATIC_SERVER } from "../../../configs/static.serve.config.js";

export const lazyLoad = lazy({ server: STATIC_SERVER});
