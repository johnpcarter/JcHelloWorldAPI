app.service('myserv', function() {
          this.getServiceList = function () {
    return [{"serviceName":"jc.helloworld.pub:getAllLoggedMessages","description":"Returns all messages logged to LOGS table, capped at 100","serviceinputs":[],"serviceoutputs":[{"outputName":"results","outputType":"Document List","outputComments":"no comment","required":true,"wrapperType":"--"}]},{"serviceName":"jc.helloworld.pub:greet","description":"log a new greeting for the person","serviceinputs":[{"inputName":"name","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"}],"serviceoutputs":[{"outputName":"greeting","outputType":"String","outputComments":"no comment","required":true,"wrapperType":"--"}]}];
}
this.getISEndpoint = function() { 
 return 'http://localhost:5555/';
}
this.getAPIList = function() { 
 return [{"name":"jc.helloworld:api","spec":{"swagger":"2.0","info":{"description":"Demo API","version":"1.0","title":"HelloWorld"},"host":"localhost:5555","basePath":"/rad/jc.helloworld:api","consumes":["application/json"],"produces":["application/json"],"schemes":["HTTP"]}}];
}
this.getCreatedTime = function() { 
 return "11-06-2025 14:27:23 CEST";
}
this.getPackageInfo = function(){
 return{"packageName":"JcHelloWorldAPI","displayName":"Hello World API example","status":"Prototype","tags":[""],"createdDate":"24-01-2025 14:34:58 CET","version":"1.0","buildNumber":"","description":"Demo package to showcase how to build and expose a\nsample API over a secure HTTPS socket"};
}
});
