import { LegendOptions, GraphTooltipOptions, LegendDisplayMode } from '@grafana/ui';
import { YAxis } from '@grafana/data';

export interface SeriesOptions {
  color?: string;
  yAxis?: YAxis;
  [key: string]: any;
}
export interface GraphOptions {
  showBars: boolean;
  showLines: boolean;
  showPoints: boolean;
}

export interface Options {
  graph: GraphOptions;
  legend: LegendOptions & GraphLegendEditorLegendOptions;
  series: {
    [alias: string]: SeriesOptions;
  };
  tooltipOptions: GraphTooltipOptions;
}

export const defaults: Options = {
  graph: {
    showBars: false,
    showLines: true,
    showPoints: false,
  },
  legend: {
    displayMode: LegendDisplayMode.List,
    placement: 'bottom',
  },
  series: {},
  tooltipOptions: { mode: 'single' },
};

export interface GraphLegendEditorLegendOptions extends LegendOptions {
  stats?: string[];
  decimals?: number;
  sortBy?: string;
  sortDesc?: boolean;
}
