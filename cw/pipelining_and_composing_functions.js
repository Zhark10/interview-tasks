const pipeline = (seed, ...funcs) => funcs.reduce((acc, func) => func(acc), seed)

const compose = (...funcs) => (seed) => funcs.reduceRight((acc, func) => func(acc), seed);
