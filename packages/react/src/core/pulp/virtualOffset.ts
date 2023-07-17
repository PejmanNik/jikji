import {HostComponentPulp, Offset} from './HostComponentPulp';
import {MarginInfo} from './marginHelper';

/*
 * Only the first version of pulp (the original pulp) has the margin top in the real dom,
 * for splitted versions we use virtual offset that will reserve
 * the space in virtual page
 *
 *                           ┌─────────────────┐
 *                           │   Margin  Top   │
 *                           ├─────────────────┤
 *                           │  xxxxxxxxxxxxx  │
 *                           ├─────────────────┤
 *                           │  Virtual Offset │
 *                           └-----------------┘
 * ┌─────────────────┐
 * │   Margin  Top   │       ┌-----------------┐
 * ├─────────────────┤       │  Virtual Offset │
 * │  xxxxxxxxxxxxx  │       ├─────────────────┤
 * │  xxxxxxxxxxxxx  │ ──►   │  xxxxxxxxxxxxx  │
 * │  xxxxxxxxxxxxx  │       ├─────────────────┤
 * ├─────────────────┤       │  Virtual Offset │
 * │  Margin Bottom  │       └-----------------┘
 * └─────────────────┘
 *                           ┌-----------------┐
 *                           │  Virtual Offset │
 *                           ├─────────────────┤
 *                           │ xxxxxxxxxxxxxx  │
 *                           ├─────────────────┤
 *                           │  Margin Bottom  │
 *                           └─────────────────┘
 *
 */

/*
 *      ┌─────────────────┐
 *      │  xxxxxxxxxxxxx  │
 *      │  xxxxxxxxxxxxx  │  ┌─────────────────┐
 *      │  xxxxxxxxxxxxx  │  │  xxxxxxxxxxxxx  │
 *      ├─────────────────┤  │  xxxxxxxxxxxxx  │
 *  5px │\\Margin Bottom\\│  │  xxxxxxxxxxxxx  │
 *      └─────────────────┘  ├─────────────────┤
 *                           │\|\|\|\|\|\|\|\|\│◄─Collapsed Margin
 *                           │|||||||||||||||||│      10px
 *      ┌─────────────────┐  ├─────────────────┤
 * 10px │||Margin   Top ||│  │  zzzzzzzzzzzzz  │
 *      │|||||||||||||||||│  │  zzzzzzzzzzzzz  │
 *      ├─────────────────┤  │  zzzzzzzzzzzzz  │
 *      │  zzzzzzzzzzzzz  │  └─────────────────┘
 *      │  zzzzzzzzzzzzz  │
 *      │  zzzzzzzzzzzzz  │
 *      └─────────────────┘
 *                              │
 *                              ▼
 *      ┌─────────────────┐
 *      │  xxxxxxxxxxxxx  │
 *      │  xxxxxxxxxxxxx  │
 *      │  xxxxxxxxxxxxx  │
 *      ├─────────────────┤
 *  5px │  Margin Bottom  │
 *      └─────────────────┘
 *    ----------------------- Page
 *      ┌─────────────────┐
 *  5px │  Margin   Top   │
 *      ├─────────────────┤ 10px
 *  5px │  Virtual Offset │
 *      ├─────────────────┤
 *      │  zzzzzzzzzzzzz  │
 *      │  zzzzzzzzzzzzz  │
 *      │  zzzzzzzzzzzzz  │
 *      └─────────────────┘
 */

export function buildVirtualOffset(
  pulp: HostComponentPulp,
  margins: MarginInfo,
): Offset {
  let split = pulp.domBoxInfo.marginBottom;
  if (pulp.state.isSplitted) {
    split += pulp.domBoxInfo.marginTop;
  }

  let element = 0;
  if (pulp.state.isSplitted) {
    element += margins.marginBottomWithCollapse;
  }

  return {
    element,
    split,
  };
}
