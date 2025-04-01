app.service('myserv', function() {
          this.getServiceList = function () {
    return [{"serviceName":"jc.helloworld.pub:getAllLoggedMessages","description":"Returns all messages logged to LOGS table, capped at 100","serviceinputs":[],"serviceoutputs":[{"outputName":"results","outputType":"Document List","outputComments":"no comment","required":true,"wrapperType":"--"}]}];
}
this.getISEndpoint = function() { 
 return 'http://localhost:5555/';
}
this.getAPIList = function() { 
 return [{"name":"jc.helloworld:api","spec":{"swagger":"2.0","info":{"description":"Demo API","version":"1.0","title":"HelloWorld"},"host":"localhost:5555","basePath":"/rad/jc.helloworld:api","consumes":["application/json"],"produces":["application/json"],"paths":{"/greetings":{"get":{"description":"Returns all messages logged to LOGS table, capped at 100","operationId":"greetings_GET_1","parameters":[],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/greetings_GET_response"}},"401":{"description":"Access Denied"}}}}},"definitions":{"results":{"type":"object","required":["Date","Id","Message","Subject"],"properties":{"Id":{"type":"integer","format":"int32"},"Subject":{"type":"string"},"Message":{"type":"string"},"Date":{"type":"string","format":"binary"}}},"greetings_GET_response":{"type":"object","required":["results"],"properties":{"results":{"type":"array","items":{"$ref":"#/definitions/results"}}}}},"schemes":["HTTP"]}}];
}
this.getCreatedTime = function() { 
 return "04-02-2025 14:27:08 IST";
}
this.getPackageInfo = function(){
 return{"packageName":"JcHelloWorldAPI","displayName":"Hello World API example","status":"Prototype","tags":[""],"createdDate":"24-01-2025 14:34:58 CET","version":"1.0","buildNumber":"","description":"Demo package to showcase how to build and expose a\nsample API over a secure HTTPS socket"};
}
});
