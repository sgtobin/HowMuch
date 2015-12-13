using System.Collections.Generic;
using System.Linq;

namespace DejaVu.HowMuch
{
    public class HowMuch
    {
        public string IsThat(long number)
        {
            if (number == 0) return "zero";

            var digitGroups = DigitGroup.SplitIntoDigitGroups(number);
            var digitGroupsInWords = ProcessDigitGroups(digitGroups);
            return AssembleDigitGroups(digitGroupsInWords);
        }

        private List<string> ProcessDigitGroups(List<DigitGroup> digitGroup)
        {
            var multiples = new[] { "", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion" };

            return digitGroup.Select((dGroup, index) =>
            {
                var digitGroupAsWords = dGroup.AsWords;
                if (string.IsNullOrWhiteSpace(digitGroupAsWords)) return string.Empty;
                return digitGroupAsWords + " " + multiples[digitGroup.Count - (index + 1)];
            }).ToList();
        }

        public string AssembleDigitGroups(List<string> digitGroupsInWords)
        {
            digitGroupsInWords = digitGroupsInWords.Where(r => !string.IsNullOrWhiteSpace(r)).ToList();
            if (digitGroupsInWords.Count == 1)
                return string.Join("", digitGroupsInWords).TrimEnd();

            if (digitGroupsInWords.Last().Contains("and"))
                return string.Join(", ", digitGroupsInWords).TrimEnd();

            for (var i = 0; i < digitGroupsInWords.Count; i++)
            {
                digitGroupsInWords[i] = i < digitGroupsInWords.Count - 2 ? digitGroupsInWords[i] + ", " : digitGroupsInWords[i];
            }

            digitGroupsInWords.Insert(digitGroupsInWords.Count - 1, " and ");

            return string.Join("", digitGroupsInWords).TrimEnd();
        }

    }
}
