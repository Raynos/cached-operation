var CachedOperation = require("../index")
    , test = require("tap").test

var operation = CachedOperation(function (key, cb) {
    cb({})
})

test("it works", function (t) {
    operation("foo", function (foo) {
        operation("foo", function (foo2) {
            operation("bar", function (bar) {
                t.equal(foo, foo2)
                t.notEqual(foo, bar)
                t.end()
            })
        })
    })
})
