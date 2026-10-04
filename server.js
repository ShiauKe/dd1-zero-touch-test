const http=require("node:http");
const port=Number(process.env.PORT||3200);
const sha=process.env.DD1_RUNNING_SHA||"dev";
http.createServer((req,res)=>{res.setHeader("content-type","application/json");if(req.url==="/healthz")return res.end(JSON.stringify({ok:true,sha}));res.end(JSON.stringify({ok:true,service:"dd1-zero-touch-test",sha}));}).listen(port,"127.0.0.1");
