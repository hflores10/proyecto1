var express=require('express');var server=express();server.use('/',express.static(boletines));server.listen(8000);
