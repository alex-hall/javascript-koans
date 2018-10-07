describe('The Basics', () => {
    it('works the way you would expect', () => {
        expect("Hello world. Replace me with the number one for your first passing test!").toEqual(1)
    })

    describe("Truthy v Falsy", () => {
        beforeAll(() => {
            //TODO: Go Read: https://www.sitepoint.com/javascript-truthy-falsy/
        })

        it('will all work if you understand the concepts!', () => {
            expect("What are things that are truthy?").toBeTruthy()
            expect("What are things that are falsy?").toBeFalsy()

            expect(1).toBe___()
            expect(0).toBe___()
            expect('false').toBe___()
            expect(undefined).toBe___()
            expect(() => {
            }).toBe___()
        })
    })

    describe('Math', () => {
        it('will test your math skills', () => {
            expect(1 + 1).toEqual('WHAT?')
            expect(100 + ___).toEqual(200)
            expect(2 ** ___).toEqual(8)
        })
    })

    describe('Arrays && Aggregates', () => {
        it('shouldnt make you feel nervous', () => {
            expect([1, 2, 3]).toContain("A number from the list")
            expect([1, 2, 3].map(n => n * ___)).toEqual([2, 4, 6])
        })
    })

    describe('Objects', () => {
        it('should help solve difficult problems', () => {
            const objectUnderTest = {
                interestingProperty: 'The Answer to the first test!',
                methodUnderTest: () => '___'
            }

            expect(objectUnderTest.___).toEqual("The Answer to the first test!")
            expect(objectUnderTest.methodUnderTest()).toEqual("I want to equal BANANA!")
            expect(typeof objectUnderTest).toEqual('Huh..')
        })
    })
})


//Pay no attention to the javascript behind the curtain!
expect.extend({
    toBe___: () => ({
        pass: false,
        message: () => 'Replace me with either a toBeTruthy() matcher or toBeFalsy() matcher'
    })
})

//Don't change me, change the test!
const ___ = 0