describe('get', function(){

    var get = require('../index').get

    it('should get value', function(){

        var obj = {
            a: {
                b: {
                    c: {
                        d: 'test'
                    }
                }
            }
        }

        get('a.b.c.d', obj)
            .should
            .equal('test')
    })
})