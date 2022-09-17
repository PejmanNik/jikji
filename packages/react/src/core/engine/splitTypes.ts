import {ComponentPulp} from 'core/pulp/ComponentPulp';
import {HostComponentPulp} from 'core/pulp/HostComponentPulp';
import {Pulp} from 'core/pulp/pulpTypes';
import {ReactElement} from 'react';
import {ReportPlugin} from './plugin';

export interface BaseSplitResult {
  lastNodeY: number;
  lastTextNodeY: number;
  pageOffset: number;
  isCompleted: boolean;
  isPageEmpty?: boolean;
}

export interface SplitPulpResult extends BaseSplitResult {
  component: ReactElement | string | number | null;
  pulp: Pulp | null;
}

export interface SplitPulpInfo {
  lastNodeY: number;
  lastTextNodeY: number;
  pageOffset: number;
  pageEndY: number;
  components: (ReactElement | string | number)[];
  rootPulp: HostComponentPulp | ComponentPulp;
  level: number;
  plugins: Readonly<ReportPlugin[]>;
}
