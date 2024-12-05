const LEGEND_SCALE_CHANNELS = {
  linear: 'Linear scale',
  log: 'Log scale',
  sqrt: 'Square root scale',
  // ...
};

for (const property of Object.keys(LEGEND_SCALE_CHANNELS)) {
  console.log(`Scale: ${LEGEND_SCALE_CHANNELS[property]}`);
}
