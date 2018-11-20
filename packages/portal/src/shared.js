import { lazy } from '../../core';
import packageJson from '../package.json';

export default lazy({
    context: 'shared',
    server: 'https://rawcdn.githack.com/sergii-azizov/lerna-react/cb6b89c5e9b1a490fff96eef88aa429a24b81474/dist/js',
    version: packageJson.version
})
