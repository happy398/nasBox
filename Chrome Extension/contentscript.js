chrome.runtime.onMessage.addListener(  
  function(request, sender, sendResponse) {  
    if (request.cmd == "saveIntoBox")  
		var dappAddress = "n1omNzcHyphrv4mmpsFeqYk2Mh5WnC3Dqp4";
		var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
		var nebpay = new NebPay();
		
		var content = request.msg.replace(/\n/g,"<br>"); ;
		
		var to = dappAddress;
        var value = "0";
        var callFunction = "save";
        var callArgs = '["' + content + '"]';
		
        var a = nebpay.call(to, value, callFunction, callArgs, {
                qrcode: {
                    showQRCode: false
                },
                extension: {
            		openExtension: true //是否支持插件调用
            	},
                listener: function(resp) {
					console.log(resp);
					alert("保存成功");
				}
				//callback: NebPay.config.testnetUrl
                //callback: NebPay.config.mainnetUrl
            }
        );
      sendResponse({farewell: "goodbye"});  
  });  