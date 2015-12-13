class DigitGroup {

    private digitGroupAsNumber: number;

    public get asWords(): string {
        return this.processDigitGroup();
    }

    constructor(private digitGroup: string) {
        this.digitGroupAsNumber = Number(digitGroup);
    }

    private processDigitGroup(): string {
        var under20 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        var under100AndDivisibleBy10 = ["ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

        if (this.digitGroupAsNumber === 0) return "";

        var bits: string[] = [];

        if (DigitGroup.asInteger(this.digitGroup, 0, 1) > 0)
            bits.push(under20[DigitGroup.asInteger(this.digitGroup, 0, 1)] + " hundred" + (this.digitGroupAsNumber % 100 === 0 ? "" : " and"));

        if (DigitGroup.asInteger(this.digitGroup, 1, 1) > 1)
            bits.push(under100AndDivisibleBy10[Math.floor(DigitGroup.asInteger(this.digitGroup, 1, 2) / 10) - 1]);

        if (DigitGroup.asInteger(this.digitGroup, 1, 2) < 20)
            bits.push(under20[DigitGroup.asInteger(this.digitGroup, 1, 2)]);

        if (DigitGroup.asInteger(this.digitGroup, 1, 1) > 1)
            bits.push(under20[DigitGroup.asInteger(this.digitGroup, 2, 1)]);

        return bits.join(" ").trim();
    }


    public static splitIntoDigitGroups(number: number): DigitGroup[] {
        var asString = this.asString(number);

        var groups = asString.match(/.{1,3}/g);
        var result: DigitGroup[] = [];
        for (var i = 0; i < groups.length; i++) {
            result.push(new DigitGroup(groups[i]));
        }
        return result;
    }

    private static asString(number: number): string {
        var snumber = number.toString();
        if (snumber.length % 3 > 0) {
            snumber = "00".substring(0, 3 - snumber.length % 3) + snumber;
        }
        return snumber;
    }

    private static asInteger(number: string, start: number, length: number): number {
        return Number(number.substring(start, start + length));
    }
}
 