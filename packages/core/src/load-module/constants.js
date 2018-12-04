import { APP } from '../../../../configs/namespace.config';

const STATIC_SERVERS = {
    DT: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/d9c7f7a8afcf4e012d2aa4ede19d059842c50685/dist'
};

const STATIC_SERVER = window[APP].STATIC_SERVER = window[APP.STATIC_SERVER] || STATIC_SERVERS.DT;

const MS_NAMES = window[APP].MS_NAMES = {
    PORTAL: 'portal',
    COMPONENTS: 'components',
    DESKTOP_SUMMARY_SCREEN: 'desktop-summary-screen',
    TASK_SELECTOR: 'task-selector',
    SCRIPTING: 'scripting',
    SEQUENCE: 'sequence',
};

export { STATIC_SERVER, MS_NAMES };
