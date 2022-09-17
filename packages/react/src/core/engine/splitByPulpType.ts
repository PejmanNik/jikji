import log, {LogFlag} from 'core/log';
import {Pulp, PulpType} from 'core/pulp/pulpTypes';
import {splitByPlugins} from './plugin';
import {splitComponent} from './splitComponent';
import {splitHostComponent} from './splitHostComponent';
import {splitHostText} from './splitHostText';
import {SplitPulpInfo, SplitPulpResult} from './splitTypes';

// find the right split function based on the pulp type
// or registered plugins
export function splitByPulpType(
  splitNodeInfo: SplitPulpInfo,
  pulp: Pulp,
): SplitPulpResult {
  log.info('split by type', {pulp}, [LogFlag.DerivationTree]);

  if (pulp.type !== PulpType.HostText) {
    const pluginResult = splitByPlugins(splitNodeInfo, pulp);

    if (pluginResult) {
      return pluginResult;
    }
  }

  switch (pulp.type) {
    case PulpType.HostText:
      return splitHostText(splitNodeInfo, pulp);

    case PulpType.HostComponent:
      return splitHostComponent(splitNodeInfo, pulp);

    case PulpType.Component:
      return splitComponent(splitNodeInfo, pulp);
  }
}
