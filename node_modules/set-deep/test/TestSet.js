describe('set', function(){

    var set = require('../index')

    it('should set value', function(){

        var obj = {
            person: {
                name: 'bill'
            }
        }

        set('person.name', obj, 'bob')

        obj.person.name
            .should
            .equal('bob')

        obj = {
            a: {
                b: {
                    c: {
                        d: 'test'
                    }
                }
            }
        }

        var setAbcd = set('a.b.c.d')
        var setObj = setAbcd(obj)

        setObj([1,2,3])

        obj.a.b.c.d
            .should
            .eql([1,2,3])
    })

    it('should set with array', function(){
        var obj = {
            a: {
                b: {
                    c: 'aaa'
                }
            }
        }

        set(['a','b','c'], obj, 'zzz')
        obj.a.b.c
            .should
            .equal('zzz')
    })

    it('should work with single prop', function(){
        var obj = {
            name: 'x'
        }

        set(['name'], obj, 'y')

        obj.name
            .should
            .equal('y')


        set('name', obj, 'z')

        obj.name
            .should
            .equal('z')
    })
})