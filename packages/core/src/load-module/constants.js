import { APP } from '../../../../configs/namespace.config';

const STATIC_SERVERS = {
    DT: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/c99b6b6d71c60d8d864c43a5d9cb386385de8132/dist'
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
