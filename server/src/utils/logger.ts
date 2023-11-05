import winston, { createLogger } from 'winston';

const customColors = {
  info: 'yellow',
  warn: 'yellow',
  error: 'red',
  debug: 'green',
};

export const log = createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({ all: true, colors: customColors }),
    winston.format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    winston.format.printf((info) => `${info.level}🫠:${[info.timestamp]}: ${info.message}`),
  ),
});
