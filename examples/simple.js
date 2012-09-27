var CachedOperation = require("../index")

var operation = CachedOperation(function (key, cb) {
    cb({})
})

operation("foo", function (foo) {
    operation("foo", function (foo2) {
        operation("bar", function (bar) {
            console.log(foo === foo2)
            console.log(foo !== bar)
        })
    })
})
