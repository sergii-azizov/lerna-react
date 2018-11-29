import { APP } from '../../../../configs/namespace.config';

const STATIC_SERVERS = {
    DT: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/c39ead981eab4ece73cf22a2e5445db68605e070/dist'
};

const STATIC_SERVER = window[APP].STATIC_SERVER = window[APP.STATIC_SERVER] || STATIC_SERVERS.DT;

const MS_NAMES = window[APP].MS_NAMES = {
    ICON: 'icon',
    NAV: 'nav',
    BUTTON: 'button',
    ABOUT_US: 'about-us',
};

export { STATIC_SERVER, MS_NAMES };
