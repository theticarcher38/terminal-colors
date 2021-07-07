import { message } from './types';
import {
    errColor,
    warnColor,
    infoColor,
 } from './colors';

export class Console {

    err (consoleLogMessage: message) {
        console.error(errColor(consoleLogMessage));
    }

    warn (consoleLogMessage: message) {
        console.warn(warnColor(consoleLogMessage));
    }

    info (consoleLogMessage: message) {
        console.info(infoColor(consoleLogMessage));
    }

    table (...args: any[]) {
        console.table(...args);
    }

}