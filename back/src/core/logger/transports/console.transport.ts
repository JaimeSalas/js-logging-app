import { transports, format } from 'winston';

const { combine, colorize, timestamp, printf } = format;

export const console  = new transports.Console({
    format: combine(
        colorize(),
        timestamp(),
        printf(({ level, message, timestamp }) => `[${level} [${timestamp}] message: ${message}]`)
    )
});
