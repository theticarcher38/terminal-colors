import { message } from './types';
const chalk = require('chalk');
import {
    red,
    yellow,
    green,
 } from './colors';

export class Console {

    err (consoleLogMessage: message) {
        console.error(red(consoleLogMessage));
    }

    warn (consoleLogMessage: message) {
        console.warn(yellow(consoleLogMessage));
    }

    info (consoleLogMessage: message) {
        console.info(green(consoleLogMessage));
    }

    table (...args: any[]) {
        console.table(...args);
    }

    customColor (hex: string, consoleLogMessage: message) {
        const color = chalk.hex(hex);
        console.log(color(consoleLogMessage));
    }

}