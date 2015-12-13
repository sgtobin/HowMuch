using DejaVu.HowMuch;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{
    [TestClass]
    public class HowMuchShould
    {
        [TestMethod]
        public void GetNumbersUnder20Correct()
        {
            Assert.AreEqual("zero", new HowMuch().IsThat(0));
            Assert.AreEqual("one", new HowMuch().IsThat(1));
            Assert.AreEqual("two", new HowMuch().IsThat(2));
            Assert.AreEqual("three", new HowMuch().IsThat(3));
            Assert.AreEqual("four", new HowMuch().IsThat(4));
            Assert.AreEqual("five", new HowMuch().IsThat(5));
            Assert.AreEqual("six", new HowMuch().IsThat(6));
            Assert.AreEqual("seven", new HowMuch().IsThat(7));
            Assert.AreEqual("eight", new HowMuch().IsThat(8));
            Assert.AreEqual("nine", new HowMuch().IsThat(9));
            Assert.AreEqual("ten", new HowMuch().IsThat(10));
            Assert.AreEqual("eleven", new HowMuch().IsThat(11));
            Assert.AreEqual("twelve", new HowMuch().IsThat(12));
            Assert.AreEqual("thirteen", new HowMuch().IsThat(13));
            Assert.AreEqual("fourteen", new HowMuch().IsThat(14));
            Assert.AreEqual("fifteen", new HowMuch().IsThat(15));
            Assert.AreEqual("sixteen", new HowMuch().IsThat(16));
            Assert.AreEqual("seventeen", new HowMuch().IsThat(17));
            Assert.AreEqual("eighteen", new HowMuch().IsThat(18));
            Assert.AreEqual("nineteen", new HowMuch().IsThat(19));
        }

        [TestMethod]
        public void GetNumbersUnderOneHundredDivisibleBy10Correct()
        {
            Assert.AreEqual("ten", new HowMuch().IsThat(10));
            Assert.AreEqual("twenty", new HowMuch().IsThat(20));            
            Assert.AreEqual("thirty", new HowMuch().IsThat(30));            
            Assert.AreEqual("fourty", new HowMuch().IsThat(40));            
            Assert.AreEqual("fifty", new HowMuch().IsThat(50));            
            Assert.AreEqual("sixty", new HowMuch().IsThat(60));            
            Assert.AreEqual("seventy", new HowMuch().IsThat(70));            
            Assert.AreEqual("eighty", new HowMuch().IsThat(80));            
            Assert.AreEqual("ninety", new HowMuch().IsThat(90));            
        }

        [TestMethod]
        public void GetNumbers100AndOver()
        {
            Assert.AreEqual("one hundred", new HowMuch().IsThat(100));            
            Assert.AreEqual("one hundred and one", new HowMuch().IsThat(101));            
            Assert.AreEqual("one hundred and ten", new HowMuch().IsThat(110));            
            Assert.AreEqual("one hundred and nineteen", new HowMuch().IsThat(119));            
            Assert.AreEqual("one hundred and twenty", new HowMuch().IsThat(120));            
            Assert.AreEqual("one hundred and twenty one", new HowMuch().IsThat(121));
            Assert.AreEqual("two hundred", new HowMuch().IsThat(200));
            Assert.AreEqual("nine hundred and ninety nine", new HowMuch().IsThat(999));            
        }

        [TestMethod]
        public void GetNumbers1000AndOver()
        {
            Assert.AreEqual("one thousand", new HowMuch().IsThat(1000));                        
            Assert.AreEqual("one thousand and one", new HowMuch().IsThat(1001));                        
            Assert.AreEqual("one million", new HowMuch().IsThat(1000000));                        
            Assert.AreEqual("one million and one", new HowMuch().IsThat(1000001));                        
            Assert.AreEqual("one million, one thousand and one", new HowMuch().IsThat(1001001));
            Assert.AreEqual("one billion", new HowMuch().IsThat(1000000000));
            Assert.AreEqual("one billion and one", new HowMuch().IsThat(1000000001));
            Assert.AreEqual("one billion, one million and one", new HowMuch().IsThat(1001000001));
            Assert.AreEqual("one billion, one million, one thousand and one", new HowMuch().IsThat(1001001001));
            Assert.AreEqual("one thousand, one hundred and eleven", new HowMuch().IsThat(1111));                        
            Assert.AreEqual("eleven thousand, one hundred and eleven", new HowMuch().IsThat(11111));                        
            Assert.AreEqual("one hundred and eleven thousand, one hundred and eleven", new HowMuch().IsThat(111111));                        
            Assert.AreEqual("one million, one hundred and eleven thousand, one hundred and eleven", new HowMuch().IsThat(1111111));                        
        }

        [TestMethod]
        public void ReallyBigNumbers()
        {
            Assert.AreEqual("one trillion", new HowMuch().IsThat(1000000000000));
            Assert.AreEqual("one trillion and one", new HowMuch().IsThat(1000000000001));
            Assert.AreEqual("one quadrillion", new HowMuch().IsThat(1000000000000000));
            Assert.AreEqual("one quadrillion and one", new HowMuch().IsThat(1000000000000001));
            Assert.AreEqual("one quintillion", new HowMuch().IsThat(1000000000000000000));                        
            Assert.AreEqual("one quintillion and one", new HowMuch().IsThat(1000000000000000001));
            Assert.AreEqual("one quintillion, one hundred and eleven quadrillion, one hundred and eleven trillion, one hundred and eleven billion, one hundred and eleven million, one hundred and eleven thousand, one hundred and eleven", new HowMuch().IsThat(1111111111111111111));                        
        }
    }
}
