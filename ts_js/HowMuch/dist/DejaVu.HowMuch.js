var HowMuch=function(){function t(){}return t.prototype.isThat=function(t){if(0===t)return"zero"
var i=DigitGroup.splitIntoDigitGroups(t),e=this.processDigitGroups(i)
return this.assembleDigitGroups(e)},t.prototype.processDigitGroups=function(t){for(var i=["","thousand","million","billion","trillion","quadrillion","quintillion"],e=[],r=0;r<t.length;r++){var n=t[r].asWords
this.isNullOrWhiteSpace(n)?e.push(""):e.push(n+" "+i[t.length-(r+1)])}return e},t.prototype.isNullOrWhiteSpace=function(t){return null===t||null!==t.match(/^ *$/)},t.prototype.assembleDigitGroups=function(t){var i=this
if(t=t.filter(function(t){return!i.isNullOrWhiteSpace(t)}),1===t.length)return t.join("").trim()
if(t[t.length-1].indexOf("and")>-1)return t.join(", ").trim()
for(var e=0;e<t.length;e++)t[e]=e<t.length-2?t[e]+", ":t[e]
return t.splice(t.length-1,0," and "),t.join("").trim()},t}(),DigitGroup=function(){function t(t){this.digitGroup=t,this.digitGroupAsNumber=Number(t)}return Object.defineProperty(t.prototype,"asWords",{get:function(){return this.processDigitGroup()},enumerable:!0,configurable:!0}),t.prototype.processDigitGroup=function(){var i=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],e=["ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
if(0===this.digitGroupAsNumber)return""
var r=[]
return t.asInteger(this.digitGroup,0,1)>0&&r.push(i[t.asInteger(this.digitGroup,0,1)]+" hundred"+(this.digitGroupAsNumber%100===0?"":" and")),t.asInteger(this.digitGroup,1,1)>1&&r.push(e[Math.floor(t.asInteger(this.digitGroup,1,2)/10)-1]),t.asInteger(this.digitGroup,1,2)<20&&r.push(i[t.asInteger(this.digitGroup,1,2)]),t.asInteger(this.digitGroup,1,1)>1&&r.push(i[t.asInteger(this.digitGroup,2,1)]),r.join(" ").trim()},t.splitIntoDigitGroups=function(i){for(var e=this.asString(i),r=e.match(/.{1,3}/g),n=[],o=0;o<r.length;o++)n.push(new t(r[o]))
return n},t.asString=function(t){var i=t.toString()
return i.length%3>0&&(i="00".substring(0,3-i.length%3)+i),i},t.asInteger=function(t,i,e){return Number(t.substring(i,i+e))},t}()
