var requestP = require('request-promise');

var postInstrument = async (url, body) => {
    return await request('POST',url, body);
};

var getInstruments = async (url) => {
    return await request('GET', url, null);
};

var deleteInstrument = async (url) => {
    return await request('DELETE',url, null);  
};

var request = async (method, url, body) => {
    let response = null;

    if(url) {
        let defaultHeader = {
            'Content-Type': 'application/json'            
        };             
    
        let httpRequest = {            
            uri:  url,                   
            headers: defaultHeader,
            json: true
        };

        if(method){
            httpRequest.method = method;
        }
        if(body){
            httpRequest.body = body;
        }        
        
        response = await requestP(httpRequest);  
    }    
    return response;
};

module.exports = {
    getInstruments : getInstruments,
    postInstrument : postInstrument,
    deleteInstrument : deleteInstrument,
    request : request,
}