import log, {LogFlag} from 'core/log';
import {ComponentPulp} from 'core/pulp/ComponentPulp';
import {HostComponentPulp} from 'core/pulp/HostComponentPulp';
import {ElementType} from 'react';
import {SplitPulpInfo, SplitPulpResult} from './splitTypes';

export type PluginPulp = ComponentPulp | HostComponentPulp;

export interface ReportPlugin {
  order?: number;
  component: ElementType;
  build?: (pulp: PluginPulp) => PluginPulp;
  split?: (
    splitNodeInfo: SplitPulpInfo,
    pulp: PluginPulp,
  ) => SplitPulpResult | undefined;
}

export function findPlugins<T extends PluginPulp>(
  plugins: Readonly<ReportPlugin[]>,
  pulp: T,
) {
  return plugins
    .filter(plugin => pulp.elementType === plugin.component)
    .sort((a, b) => (a.order ?? 1) - (b.order ?? 1));
}

export function buildPulpByPlugins(
  plugins: Readonly<ReportPlugin[]>,
  pulp: PluginPulp,
): PluginPulp {
  const availablePlugins = findPlugins(plugins, pulp);
  let result = pulp;

  for (const plugin of availablePlugins) {
    result = plugin.build?.(result) ?? pulp;
  }

  return result;
}

export function splitByPlugins(
  splitNodeInfo: SplitPulpInfo,
  pulp: PluginPulp,
): SplitPulpResult | undefined {
  const availablePlugins = findPlugins(splitNodeInfo.plugins, pulp);

  for (const plugin of availablePlugins) {
    const result = plugin.split?.(splitNodeInfo, pulp);

    if (result) {
      // prettier-ignore
      log.debug('split by plugin', {pulp, plugin, splitNodeInfo}, [LogFlag.SplitElement]);
      return result;
    }
  }
}
