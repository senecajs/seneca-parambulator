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
