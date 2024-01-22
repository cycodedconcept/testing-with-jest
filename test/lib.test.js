const lib = require('../lib')

// describe('absolute', () => {
//     it('should return positive number if input is positive', () => {
//         const result = lib.absolute(1);
//         expect(result).toBe(1)
//     });
    
//     it('should return positive number if input is negative', () => {
//         const result = lib.absolute(-1);
//         expect(result).toBe(1)
//     });
    
//     it('should return 0 if input is 0', () => {
//         const result = lib.absolute(0);
//         expect(result).toBe(0)
//     });
// });

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]))
    })
})

