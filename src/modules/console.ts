import { message } from './types';
const chalk = require('chalk');
import {
    red,
    yellow,
    green,
 } from './colors';

export class Console {

    err = (consoleLogMessage: message) => {
        console.error(red(consoleLogMessage));
    }

    warn = (consoleLogMessage: message) => {
        console.warn(yellow(consoleLogMessage));
    }

    info = (consoleLogMessage: message) => {
        console.info(green(consoleLogMessage));
    }

    table = (...args: any[]) => {
        console.table(...args);
    }

    customColor = (text_hex: string,  consoleLogMessage: message, is_bold: boolean, bg_hex?: string) => {
        let color;
        if (bg_hex !== undefined) {
            color = chalk.hex(text_hex).bgHex(bg_hex);
            if ( is_bold === true ) {
                color = chalk.hex(text_hex).bgHex(bg_hex).bold;
            } else {
                color = chalk.hex(text_hex).bgHex(bg_hex);
            }
        } else {
            color = chalk.hex(text_hex);
            if ( is_bold === true ) {
                color = chalk.hex(text_hex).bold;
            } else {
                color = chalk.hex(text_hex);
            }
        }
        console.log(color(consoleLogMessage));
    }

}