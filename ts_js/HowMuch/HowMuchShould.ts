/// <reference path="scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="howmuch.ts" />
/// <reference path="digitgroup.ts" />

describe('HowMuchShould', () => {

    it('GetNumbersUnder20Correct', () => {
        expect(new HowMuch().isThat(0)).toBe("zero");
        expect(new HowMuch().isThat(1)).toBe("one");
        expect(new HowMuch().isThat(2)).toBe("two");
        expect(new HowMuch().isThat(3)).toBe("three");
        expect(new HowMuch().isThat(4)).toBe("four");
        expect(new HowMuch().isThat(5)).toBe("five");
        expect(new HowMuch().isThat(6)).toBe("six");
        expect(new HowMuch().isThat(7)).toBe("seven");
        expect(new HowMuch().isThat(8)).toBe("eight");
        expect(new HowMuch().isThat(9)).toBe("nine");
        expect(new HowMuch().isThat(10)).toBe("ten");
        expect(new HowMuch().isThat(11)).toBe("eleven");
        expect(new HowMuch().isThat(12)).toBe("twelve");
        expect(new HowMuch().isThat(13)).toBe("thirteen");
        expect(new HowMuch().isThat(14)).toBe("fourteen");
        expect(new HowMuch().isThat(15)).toBe("fifteen");
        expect(new HowMuch().isThat(16)).toBe("sixteen");
        expect(new HowMuch().isThat(17)).toBe("seventeen");
        expect(new HowMuch().isThat(18)).toBe("eighteen");
        expect(new HowMuch().isThat(19)).toBe("nineteen");
    });

    it('GetNumbersUnderOneHundredDivisibleBy10Correct', () => {
        expect(new HowMuch().isThat(10)).toBe("ten");
        expect(new HowMuch().isThat(20)).toBe("twenty");
        expect(new HowMuch().isThat(30)).toBe("thirty");
        expect(new HowMuch().isThat(40)).toBe("fourty");
        expect(new HowMuch().isThat(50)).toBe("fifty");
        expect(new HowMuch().isThat(60)).toBe("sixty");
        expect(new HowMuch().isThat(70)).toBe("seventy");
        expect(new HowMuch().isThat(80)).toBe("eighty");
        expect(new HowMuch().isThat(90)).toBe("ninety");
    });

    it('GetNumbers100AndOver', () => {        
        expect(new HowMuch().isThat(100)).toBe("one hundred");
        expect(new HowMuch().isThat(101)).toBe("one hundred and one");
        expect(new HowMuch().isThat(110)).toBe("one hundred and ten");
        expect(new HowMuch().isThat(119)).toBe("one hundred and nineteen");
        expect(new HowMuch().isThat(120)).toBe("one hundred and twenty");
        expect(new HowMuch().isThat(121)).toBe("one hundred and twenty one");
        expect(new HowMuch().isThat(200)).toBe("two hundred");
        expect(new HowMuch().isThat(999)).toBe("nine hundred and ninety nine");            
    });

    it('GetNumbers1000AndOver', () => {
        expect(new HowMuch().isThat(1000)).toBe("one thousand");
        expect(new HowMuch().isThat(1001)).toBe("one thousand and one");
        expect(new HowMuch().isThat(1000000)).toBe("one million");
        expect(new HowMuch().isThat(1000001)).toBe("one million and one");
        expect(new HowMuch().isThat(1001001)).toBe("one million, one thousand and one");
        expect(new HowMuch().isThat(1000000000)).toBe("one billion");
        expect(new HowMuch().isThat(1000000001)).toBe("one billion and one");
        expect(new HowMuch().isThat(1001000001)).toBe("one billion, one million and one");
        expect(new HowMuch().isThat(1001001001)).toBe("one billion, one million, one thousand and one");
        expect(new HowMuch().isThat(1111)).toBe("one thousand, one hundred and eleven");
        expect(new HowMuch().isThat(11111)).toBe("eleven thousand, one hundred and eleven");
        expect(new HowMuch().isThat(111111)).toBe("one hundred and eleven thousand, one hundred and eleven");
        expect(new HowMuch().isThat(1111111)).toBe("one million, one hundred and eleven thousand, one hundred and eleven");                        
    });

    it('ReallyBigNumbers', () => {
        expect(new HowMuch().isThat(1000000000000)).toBe("one trillion");
        expect(new HowMuch().isThat(1000000000001)).toBe("one trillion and one");
        expect(new HowMuch().isThat(1000000000000000)).toBe("one quadrillion");
        expect(new HowMuch().isThat(1000000000000001)).toBe("one quadrillion and one");
        expect(new HowMuch().isThat(1000000000000000000)).toBe("one quintillion");
    });

});
 