export const logLevel = ['debug', 'info', 'warn', 'error', 'none'] as const;
export type LogLevel = typeof logLevel[number];

export enum LogFlag {
  SectionLayout = 'Section_Layout',
  SplitElement = 'Split_Element',
  SplitPage = 'Split_Page',
  DerivationTree = 'Derivation_Tree',
  Recoil = 'Recoil',
  Overflow = 'Overflow',
}

const flagColor = [
  '#24e6ff',
  '#1d9bf0',
  '#03d7c3',
  '#d7c315',
  '#f46060',
  '#db60f4',
];

//TODO: convert unknown to primitive types for better logs in SSG
interface LogParam {
  [key: string | number]: unknown;
}
class Log {
  private level: LogLevel = 'none';
  private flags: LogFlag[] = [];

  setLevel(level: LogLevel) {
    this.level = level;
  }
  setFlags(flags: LogFlag[]) {
    this.flags = flags;
  }

  info(message: unknown, param?: LogParam, flags?: LogFlag[] | LogFlag) {
    this.log('info', message, param, flags);
  }

  debug(message: unknown, param?: LogParam, flags?: LogFlag[] | LogFlag) {
    this.log('debug', message, param, flags);
  }

  error(message: unknown, param?: LogParam, flags?: LogFlag[] | LogFlag) {
    this.log('error', message, param, flags);
  }

  warn(message: unknown, param?: LogParam, flags?: LogFlag[] | LogFlag) {
    this.log('warn', message, param, flags);
  }

  private stringify(param: LogParam) {
    const seen = new Set<unknown>();

    return JSON.stringify(param, (key, value) => {
      if (seen.has(value)) {
        return '...';
      }
      if (typeof value === 'object') {
        seen.add(value);
      }
      return value;
    });
  }

  private validateLevel(method: LogLevel) {
    return logLevel.indexOf(this.level) <= logLevel.indexOf(method);
  }

  private normalizeFlags(flags?: LogFlag[] | LogFlag) {
    if (!flags) return [];
    if (!Array.isArray(flags)) return [flags];
    return flags;
  }

  private validateLogFlag(flags?: LogFlag[] | LogFlag) {
    const normalizedFlags = this.normalizeFlags(flags);

    return (
      this.flags.length === 0 ||
      normalizedFlags.length === 0 ||
      this.flags.some(af => normalizedFlags.includes(af))
    );
  }

  private getFlagColor(flag: LogFlag) {
    const flagNames = Object.values(LogFlag);
    const index = flagNames.indexOf(flag);
    return flagColor[index];
  }

  private getStyledFlags(flags?: LogFlag[] | LogFlag) {
    const normalizedFlags = this.normalizeFlags(flags);
    if (normalizedFlags.length === 0) return [];

    return normalizedFlags.flatMap(f => [
      '%c ' + f + ' ',
      `background: ${this.getFlagColor(f)}; color: white; display: block;`,
    ]);
  }

  private normalizeParam(param?: LogParam) {
    const isPuppeteer = /HeadlessChrome/.test(window.navigator.userAgent);
    return param && isPuppeteer ? this.stringify(param) : param;
  }

  private log(
    method: 'debug' | 'info' | 'warn' | 'error',
    message: unknown,
    param?: LogParam,
    flags?: LogFlag[] | LogFlag,
  ) {
    if (this.validateLevel(method) && this.validateLogFlag(flags)) {
      // eslint-disable-next-line no-console
      console[method](
        ...this.getStyledFlags(flags),
        message,
        this.normalizeParam(param),
      );
    }
  }
}

export default new Log();
