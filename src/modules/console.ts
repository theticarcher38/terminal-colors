import { message } from './types';
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

    customColor (consoleLogMessage: message) {
        console.info(yellow(consoleLogMessage));
    }

}