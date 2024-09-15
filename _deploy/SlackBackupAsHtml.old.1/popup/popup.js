// ビジーwaitを使う方法
function sleep(waitMsec) {
    var startMsec = new Date();
  
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
}

function sendMessageCompleted(item) {
    if (!item.last) {
        sleep(500);
        sendMessage(item.tabId, item.ids, item.messages, true);
        return;
    }
    //document.getElementById('result').textContent = item.messages;
    
    const jsonResult = document.getElementById('jsonResult');
    const htmlResult = document.getElementById('htmlResult');

    if (item.messages.length == 0) {
        return;
    }

    jsonResult.innerHTML = item.messages;
    const q = jsonResult.querySelectorAll(".c-virtual_list__item"); //(".c-virtual_list__item"); //".c-search_message__content");
    q.forEach(element => {
        htmlResult.appendChild(element);
    });
    
    //const jsonOutput = domJSON.toJSON(htmlResult, {"stringify":true}); 
    //alert(jsonOutput);
    //document.getElementById('result').textContent = jsonOutput;
    
    document.getElementById('result').textContent = 
    '<html><head>'
    + '<link rel="stylesheet" href="https://a.slack-edge.com/bv1-10/slack-kit-styles.cdd05c3.min.css?cacheKey=gantry-1682980668" crossorigin="anonymous">'
    + '<link rel="stylesheet" href="https://a.slack-edge.com/bv1-10/client-boot-styles.2cb4bd0.min.css?cacheKey=gantry-1682980668" crossorigin="anonymous">'
    + '<link rel="stylesheet" href="https://a.slack-edge.com/bv1-10/helper-styles.b82cc1c.min.css?cacheKey=gantry-1682980668" crossorigin="anonymous">'
    + '<style>html{overflow:scroll;} .c-virtual_list__item, .c-virtual_list__sticky_container{position:revert; margin:10px; padding-right:20px;}</style>'
    + '</head><body>'
    + htmlResult.outerHTML
    + '</body></html>';

    htmlResult.style.display = "none";
    document.getElementById('btnSave').disabled = false;;
}

function sendMessage(tabId, ids, messages, last) {
    chrome.tabs.sendMessage(
        tabId, 
        {"ids": ids, "messages": messages, "tabId": tabId, "last": last}, 
        sendMessageCompleted
    )
}

function onBtnRunClick(e) {
    const htmlResult = document.getElementById('htmlResult');
    htmlResult.style.display = "block";
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        let ids = [];
        let messages = [];
        sendMessage(tabs[0].id, ids, messages, false);
    });
}

function onBtnSaveClick(e) {
    const text = document.getElementById('result').textContent;
    const blob = new Blob([text], {type: 'text/plain'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'slack_save_data.html';
    link.click();
}

function onBtnCloseClick(e) {
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnRun').addEventListener('click', onBtnRunClick);
    document.getElementById('btnSave').addEventListener('click', onBtnSaveClick);
    document.getElementById('btnClose').addEventListener('click', onBtnCloseClick);
});
