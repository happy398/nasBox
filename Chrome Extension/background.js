
chrome.contextMenus.create({
    title: '一键保存到星云链', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
		var content = params.selectionText.replace(/\n/g,"<br>");
		
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  
		  chrome.tabs.sendMessage(tabs[0].id, {cmd: "saveIntoBox", msg: content}, function(response) {  
			console.log(response.farewell);  
		  });  
		});  
    }
});
