# cached-operation [![Build Status][1]][2]

Cache an asynchronous operation

## Example

```
var CachedOperation = require("cached-operation")

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
```

## Installation

`npm install cached-operation`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/cached-operation.png
  [2]: http://travis-ci.org/Raynos/cached-operation
