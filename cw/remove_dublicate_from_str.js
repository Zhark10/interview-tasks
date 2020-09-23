const dup = (s) => s.map(str => str.split('').reduce((res, el, i, init) => el === init[i - 1] ? res : res + el, ''));
