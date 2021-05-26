module.exports={
	Parser : function(text){
		var results={};
		var myResult="";
		var lines=text.split('\n');
		lines.forEach(line=>{
			var parts=line.split(' ');
			var letter=parts[1];
			var count=parseInt(parts[2]);
			if(!results[letter]){
				results[letter]=0;
			}
             results[letter]+=parseInt(count);
		});
		 for(let value in results)
		 {
		 	myResult+=value+":"+results[value]+";"
		 }
	console.log(myResult);
		document.getElementById("parser").innerHTML=myResult;

	}
}