var fs = require("fs");
var request = require("request");
const express=require('express')
const axios=require('axios');
const fetch=require('node-fetch')

const app=express()
var options = { method: 'get',
 //url: 'http://cricsurf.com/author/1',
 headers: 
  { 'cache-control': 'no-cache',
    Connection: 'keep-alive',
    'content-length': '104151',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    'accept-encoding': 'gzip, deflate',
    Host: 'cricsurf.com',
    Accept: '*/*',
   'User-Agent': 'request' },
 formData: 
  { uploadFile: 
     { value: 'fs.createReadStream("C:/Users/Paras/Downloads/copy.png")',
       options: 
        { filename: 'C:/Users/Paras/Downloads/copy.png',
          contentType: null } },
  type: 'image/png' }};
  var get={
    method:'get',
    //url:'https://cricsurf.com/author/1',
    headers:{
      'cache-control': 'no-cache',
    //Connection: 'keep-alive',
    //'content-length': '104151',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    'accept-encoding': 'gzip, deflate',
    Host: 'cricsurf.com',
    Accept: '*/*',
   'User-Agent': 'request'
    }
  }

  axios({
    method:'get',
    url:'http://cricsurf.com/teams/',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    }).then(res=>{console.log(res)  
      this.setState({name:res.data.name})
    }).catch(err=>console.log(err))
   

//fetch('https://cricsurf.com/author/1',get).then(res=>console.log(res)).catch(err=>console.log(err))
/*request(get,(err,res,body)=>{
  console.log(body)
})*/