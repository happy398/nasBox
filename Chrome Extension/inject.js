var dappAddress = "n1hTnLeptBem7N1wZAkhF4VF2KEjQEpmQ8F";
function saveIntoBox2(content){
		var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
		var nebpay = new NebPay();
		
		var to = dappAddress;
        var value = "0";
        var callFunction = "save";
        var callArgs = '["' + content + '"]';
		
        var a = nebpay.call(to, value, callFunction, callArgs, {
            listener: function(resp) {
                console.log(JSON.stringify(resp));
				alert("保存成功");
            }
        });
	
}