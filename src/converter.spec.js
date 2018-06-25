var converter = require("./converter");

describe('Roman numerals converter', () => {
    it('should be defined', () => {
        expect(converter.convert()).toBeDefined()
    });
});