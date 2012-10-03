var CachedEmitter = require("cached-events")
    , slice = Array.prototype.slice

module.exports = CachedOperation

function CachedOperation(f, opts) {
    var keys = {}
        , emitter = CachedEmitter()

    opts = opts || {}

    var getKey = opts.getKey || defaultGetKey

    if (opts.maxListeners) {
        emitter.setMaxListeners(opts.maxListeners)
    }

    return operation

    function operation() {
        var args = slice.call(arguments)
            , cb = args.pop()
            , key = getKey(args)

        args.push(intercept)

        if (!keys[key]) {
            keys[key] = true
            f.apply(null, args)
        }

        emitter.on(key, cb)

        function intercept() {
            var results = slice.call(arguments)
            results.unshift(key)
            emitter.emit.apply(emitter, results)
        }
    }
}

function defaultGetKey(args) {
    return args[0]
}
