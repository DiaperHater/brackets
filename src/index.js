

function check(str, config) {
	let stack = [];
	let opening = [];
	let closing = [];

	config.forEach((item)=>{
		opening.push(item[0]);
	})
	config.forEach((item)=>{
		closing.push(item[1]);
	})


	for(let i = 0; i < str.length; i++){
		let char = str[i];

		// console.log(`stack=${stack}`);
		// console.log(`currentChar=${char}`);

		if(opening.indexOf(char) > -1){
			if(closing.indexOf(char) > -1){
				if(stack.indexOf(char) > -1){
					if(stack.pop() != char) {
						return false;
					} else {
						continue;
					}
				}else{
					stack.push(char);
					continue;
				}
			}
			stack.push(char);
		} else {
			if( stack.indexOf(opening[closing.indexOf(char)]) > -1 ){
				if(stack.pop() != opening[closing.indexOf(char)]){
					return false;
				} 
			} else {
				return false;
			}
		}
	};

	console.log(`stack=${stack}`);
	return stack.length == 0 ? true : false;

}

module.exports = check;