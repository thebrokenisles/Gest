
var st = "Bonjour ,apio";
var tm = Array();
tm = st.split(" ");
var result = Array();
var arr = [
	{
		Id:1,
		keywords:["hi","yo","Bonjour"],
		res:"Hi"
	},
	{
		Id:2,
		keywords:["its","hot","here","heat"],
		res:"Oui,il fait chaud"
	}

]
arr.forEach(function(val,index){
	val.keywords.forEach(function(el,i){
		tm.filter(function(element,u,array){
			if(element == el){
				result.push(val.Id)
			}
		})
	})
})
var allTypesArray = result;
var map = allTypesArray.reduce(function (p, c) {
    p[c] = (p[c] || 0) + 1;
    return p;
}, {});
var newTypesArray = Object.keys(map).sort(function (a, b) {
    return map[a] < map[b];
});
var o = newTypesArray[0]-1
console.log(arr[o].res)