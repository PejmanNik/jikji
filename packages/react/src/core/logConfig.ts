import log, {LogLevel, LogFlag} from './log';

const logConfig = {
  setLevel(level: LogLevel) {
    log.setLevel(level);
  },
  setFlags(flags: LogFlag[]) {
    log.setFlags(flags);
  },
};

export default logConfig;
