let Stack = require('./mystack.js')

let priority_map = {
	"+": 1,
	"-": 1,
	"*": 2,
	"/": 2
};
let transform = function(arr){
	let result = [];
	let stack = new Stack.Stack();
	for(let i = 0; i < arr.length;i++){
		let item = arr[i];
		if (!isNaN(item)) {
			result.push(item);
		} else if(item == '('){
			stack.push(item);
		} else if(item == ')'){
			while(stack.top()!='('){
				result.push(stack.pop());
			}
			stack.pop();
		} else {
			while(!stack.isEmpty() && ["+", "-", "*", "/"].indexOf(stack.top()) >= 0 && priority_map[stack.top()] >= priority_map[item]){
				result.push(stack.pop());
			}
			stack.push(item);
		}
	}
	while(!stack.isEmpty()){
		result.push(stack.pop());
	}
	return result;
}


// 12+3
console.log(transform(["12","+", "3"]));
// 2-3+2
console.log(transform(["2","-", "3", "+", "2"]));
// (1+(4+5+3)-3)+(9+8)
var exp = ["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8",")"];
console.log(transform(exp));

// (1+(4+5+3)/4-3)+(6+8)*3
var exp = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
console.log(transform(exp));

console.log(transform(["12","+", "3","*", "5"]));
console.log(transform(["12","*", "3","+", "5"]));


let calc_exp = function(arr){
    var stack = new Stack.Stack();
    for(var i = 0; i < arr.length;i++){
        var item = arr[i];

        if(["+", "-", "*", "/"].indexOf(item) >= 0){
            // 从栈顶弹出两个元素
            var value_1 = stack.pop();
            var value_2 = stack.pop();
            // 拼成表达式
            var exp_str = value_2 + item + value_1;
            // 计算并取整
            var res = parseInt(eval(exp_str));
            // 将计算结果压如栈
            stack.push(res.toString());
        }else{
            stack.push(item);
        }
    }
    // 表达式如果是正确的,最终,栈里还有一个元素,且正是表达式的计算结果
    return stack.pop();
};


let exp_1 = ["4", "13", "5", "/", "+"];
let exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(calc_exp(exp_1));//6
console.log(calc_exp(exp_2));//22