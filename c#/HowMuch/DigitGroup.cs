using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace DejaVu.HowMuch
{
    public class DigitGroup
    {
        private readonly string _digitGroup;
        private readonly int _digitGroupAsNumber;

        public string AsWords
        {
            get { return ProcessDigitGroup(); }
        }

        public DigitGroup(string digitGroup)
        {
            _digitGroup = digitGroup;
            _digitGroupAsNumber = Convert.ToInt32(digitGroup);
        }

        private string ProcessDigitGroup()
        {
            var under20 = new[] { "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
            var under100AndDivisibleBy10 = new[] { "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety" };

            if (_digitGroupAsNumber == 0) return "";

            var bits = new List<string>();

            if (AsInteger(_digitGroup, 0, 1) > 0)
                bits.Add(under20[AsInteger(_digitGroup, 0, 1)] + " hundred" + (_digitGroupAsNumber % 100 == 0 ? "" : " and"));

            if (AsInteger(_digitGroup, 1, 1) > 1)
                bits.Add(under100AndDivisibleBy10[AsInteger(_digitGroup, 1, 2) / 10 - 1]);

            if (AsInteger(_digitGroup, 1, 2) < 20)
                bits.Add(under20[AsInteger(_digitGroup, 1, 2)]);

            if (AsInteger(_digitGroup, 1, 1) > 1)
                bits.Add(under20[AsInteger(_digitGroup, 2, 1)]);

            return string.Join(" ", bits).TrimEnd();
        }

        public static List<DigitGroup> SplitIntoDigitGroups(long number)
        {
            var asString = AsString(number);
            var groups = Regex.Replace(asString, ".{3}", "$0,").Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            return groups.Select(g => new DigitGroup(g)).ToList();
        }

        private static string AsString(long number)
        {
            var snumber = Convert.ToString(number);
            if (snumber.Length % 3 > 0)
                snumber = snumber.PadLeft(snumber.Length + (3 - snumber.Length % 3), '0');
            return snumber;
        }

        private static Int32 AsInteger(string number, int start, int length)
        {
            return Convert.ToInt32(number.Substring(start, length));
        }

    }
}