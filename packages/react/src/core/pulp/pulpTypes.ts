import {ReactElement} from 'react';
import {ComponentPulp} from './ComponentPulp';
import {HostComponentPulp} from './HostComponentPulp';
import {HostTextPulp} from './HostTextPulp';

export enum PulpType {
  Component,
  HostComponent,
  HostText,
}

export type Pulp = HostTextPulp | HostComponentPulp | ComponentPulp;

export interface SplitPulp<T extends ReactElement | string | number> {
  component: T | null;
  pulp: Pulp | null;
}
