const { Temporal } = require('@js-temporal/polyfill');

const now = Temporal.Now.plainDateISO();
console.log(now.toString());


