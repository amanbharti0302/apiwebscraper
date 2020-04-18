const request = require('request');
const cheerio = require('cheerio');
const getUrls = require('get-urls');
const express = require('express');

exports.linkcreater = async(req,res)=>{
    try{
        request('https://yourstory.com/mystory/news-sitemap.xml',(error,response,html)=>{
            var data = [];
            const $ = cheerio.load(html);
            var as = $.text();
            as = as.split('\n');

            as.map((el,id)=>{
              const link = el.split(' ')[1];
              var date = el.split(' ')[2];
              if(link&&date)  
              data.push({link:link,date:(date.replace("YourStoryen","")).split('T')[0]})
            })
     
            res.status(200).json({
                status: 'success',
                data
              });
            })

    }catch(err)
    {   
        res.status(404).json({
            status: 'fail',
            message: err
          });
    }
}

exports.getdataofalink = async(req,res)=>{
  try{
    request('https://yourstory.com/mystory/top-android-mobile-app-ideas-follow-2020',(error,response,html)=>{
      const $ = cheerio.load(html);
      const text = $.text();
      const all_link = getUrls($.text());
      var link = [];
      all_link.forEach((el)=>{
         link.push(el)
      });

      res.status(200).json({
        status: 'success',
        text:text,
        link:link
      });


    })

  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
}

exports.overview = async(req,res)=>{
  try{
      res.render('index');
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
}