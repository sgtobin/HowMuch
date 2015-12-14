# HowMuch
HowMuch is a simple library that translates numbers into words. The library is available in JavaScript and C#.

```C#
var howMuch = new HowMuch().IsThat(1001000001);
// Outputs: one billion, one million and one
```

## JavaScript
### Getting Started
Include a reference to the DejaVu.HowMuch.min.js file located in the ts_js\HowMuch\dist folder.
```html
<script src="dist/DejaVu.HowMuch.min.js"></script>
```
### Usage
```javascript
console.log(new HowMuch().isThat(1001001));
// Outputs: one million, one thousand and one
```

## C# #
### Getting Started
Add a reference to the DejaVu.HowMuch.dll file located in the c#\HowMuch\dist folder.
### Usage
```c#
Console.WriteLine(new HowMuch().IsThat(1001001));
// Outputs: one million, one thousand and one
```
