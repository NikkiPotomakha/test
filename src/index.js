import { SciChartSurface } from "scichart/Charting/Visuals/SciChartSurface";
import { NumericAxis } from "scichart/Charting/Visuals/Axis/NumericAxis";
async function initSciChart() {
  SciChartSurface.SetRuntimeLicenseKey(
    "l5fEwjBE4cFCQHjR96zUEKP4TC+rbu8K6iht3WIpE5Si4V1QRQ3a5msDnPxUCHmjdS65dW3SsuqE5NARTBJX+MWnV/xmageg2RupEorEtB2lkecuZrkjrL/56UdiNhkhU+ZPA9RPQTwIXisieboVUtwpAG3dmwG3SNNkxxfTsaxOqbqWldTQsXdaU8R/DZVsHibScwTS/IBBbsGABfJzjR1RNmBy5lWSxMa+d6p91FrORQLhzwoVBGDg6IR+WZFkk4n5nDI17vV6eCOqyzIjrcaCpuRY7945EiSiSU2/HanRIILYHHZ9PD8kz4acQLIhu6a4UuoeaIIpbrpbnCCJqNAD+FDDnj8vM0jnL/WwykiI0PeySiW2c/8qo6NhseUW8TvWmETYZqTiUv/QLUpMCV++bucnFPl77NwB/6DuCK9Z5H+TGJhC4U4BvzfBwkM8PEMJ2OVeWpU8Tjd8Jhwqa/mpwJbbe8qFbe5J9mibfvon/XOW597vA0REiWQWHLwUlzBszjwI+bMxKQPd+3JzSWA1xs3WwiWJLRhR/4rYfezL4wIQxDVmMH50rA3upP9d8X8Onzax95W1e3OLAUH0SDEmd5zixBWN"
  );

  // Also, once activated (trial or paid license) having the licensing wizard open on your machine
  // will mean any or all applications you run locally will be fully licensed.
  // Create the SciChartSurface in the div 'scichart-root'
  // The SciChartSurface, and webassembly context 'wasmContext' are paired. This wasmContext
  // instance must be passed to other types that exist on the same surface.
  const { sciChartSurface, wasmContext } = await SciChartSurface.create(
    "scichart-root"
  );
  // Create an X,Y Axis and add to the chart
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);

  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);
  // That's it! You just created your first SciChartSurface!
}
initSciChart();
