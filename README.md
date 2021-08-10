![Seneca](http://senecajs.org/files/assets/seneca-logo.png)

> A [Seneca.js][] plugin that validates messages using the
> [parambulator](https://github.com/rjrodger/parambulator) module.

# seneca-parambulator
[![npm version][npm-badge]][npm-url]
[![Dependency Status][david-badge]][david-url]
[![Build Status][travis-badge]][travis-url]
[![Gitter][gitter-badge]][gitter-url]

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

This plugin is included by default in Seneca 2.x.

**NOTE**: This plugin will not be included by default in Seneca 3.x
  and above, and will need to be installed manually.

### Seneca compatibility

Supports Seneca versions **1.x** - **3.x**

## Installation
This is needed only for Seneca 3.x and above.

```sh
npm install seneca-parambulator
```

And in your code:

```js
require('seneca')()
  .use('parambulator')
```

## Usage

You can validate action messages by providing
[parambulator](https://github.com/senecajs/seneca-parambulator) rules as part of the
action definition.

```js
require('seneca')
    .use('parambulator') // not needed if Seneca 2.x
    .add(
      {
        a: 1,
        b: {required$: true}
      },
      function (msg, done) {
        done(null, {c: msg.b})
      })
    .act('a:1,b:2') // valid
    .act('a:1') // invalid as no b value
```

Any properties in the action pattern that are not constants are
interpreted as_ parambulator_ rules.


## Contributing

The [Senecajs org][] encourages open participation. If you feel you
can help in any way, be it with documentation, examples, extra
testing, or new features please get in touch.


## License
Copyright (c) 2016, Richard Rodger and other contributors.
Licensed under [MIT][].

[MIT]: ./LICENSE
[npm-badge]: https://badge.fury.io/js/seneca-parambulator.svg
[npm-url]: https://badge.fury.io/js/seneca-parambulator
[Senecajs org]: https://github.com/senecajs/
[Seneca.js]: https://www.npmjs.com/package/seneca
[@senecajs]: http://twitter.com/senecajs
[senecajs.org]: http://senecajs.org/
[travis-badge]: https://travis-ci.org/senecajs/seneca-parambulator.svg
[travis-url]: https://travis-ci.org/senecajs/seneca-parambulator
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/senecajs/seneca
[github issue]: https://github.com/senecajs/seneca-parambulator/issues
[david-badge]: https://david-dm.org/rjrodger/seneca-parambulator.svg
[david-url]: https://david-dm.org/rjrodger/seneca-parambulator
