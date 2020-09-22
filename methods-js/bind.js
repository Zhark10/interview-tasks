Function.prototype.myBind_1 = function(ctx, ...args) { return () => this.apply(ctx, args) }

Function.prototype.myBind_2 = function(ctx) { return (...args) => this.apply(ctx, args) }
