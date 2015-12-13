class HowMuch {

    public isThat(number: number): string {
        if (number === 0) return "zero";

        var digitGroups = DigitGroup.splitIntoDigitGroups(number);
        var digitGroupsInWords = this.processDigitGroups(digitGroups);
        return this.assembleDigitGroups(digitGroupsInWords);
    }

    private processDigitGroups(digitGroup: DigitGroup[]): string[] {
        var multiples = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];

        var result: string[] = [];

        for (var i = 0; i < digitGroup.length; i++) {
            var digitGroupAsWords = digitGroup[i].asWords;
            if (this.isNullOrWhiteSpace(digitGroupAsWords)) {
                result.push("");
                continue;
            }
            result.push(digitGroupAsWords + " " + multiples[digitGroup.length - (i + 1)]);
        }
        return result;
    }

    private isNullOrWhiteSpace(str: string): boolean {
        return str === null || str.match(/^ *$/) !== null;
    }

    public assembleDigitGroups(digitGroupsInWords: string[]): string {
        digitGroupsInWords = digitGroupsInWords.filter(e => { return !this.isNullOrWhiteSpace(e); });

        if (digitGroupsInWords.length === 1)
            return digitGroupsInWords.join("").trim();

        if (digitGroupsInWords[digitGroupsInWords.length - 1].indexOf("and") > -1)
            return digitGroupsInWords.join(", ").trim();

        for (var i = 0; i < digitGroupsInWords.length; i++) {
            digitGroupsInWords[i] = i < digitGroupsInWords.length - 2 ? digitGroupsInWords[i] + ", " : digitGroupsInWords[i];
        }

        digitGroupsInWords.splice(digitGroupsInWords.length - 1, 0, " and ");

        return digitGroupsInWords.join("").trim();
    }
}

