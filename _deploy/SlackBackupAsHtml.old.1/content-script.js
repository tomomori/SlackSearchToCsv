chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let newItemFound = false;
        let res = {tabId: request.tabId, ids: request.ids, messages: request.messages, last: request.last};
        
        const messGroups = document.querySelectorAll("[id^='messages_']"); // (".c-message_group"); //"#messages_*"); 
        messGroups.forEach((e) => {
            e.scrollIntoView();
            if (request.ids.indexOf(e.id) < 0) {
                newItemFound = true;
                res.ids.push(e.id);
                res.messages.push(e.outerHTML);
            }
        });    
        
        res.last = !newItemFound;

        sendResponse(res);
        return true;
    }
);

