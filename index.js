const express = require('express');
const app = express();
const PORT = 8080;

const loggingMiddleware = (req,res,next) => {
    const start = Date.now();
    console.log('HTTP method:', req.method);
    console.log('REQUEST URL:', req.url);
    console.log('TIMESTAMP:', new Date().toISOString());

    res.on('finish', () => {
        const end = Date.now();
        console.log('TIME TAKEN:', end-start + 'ms');
        console.log('Rachit Garg');
    });

    next();
}

app.use(loggingMiddleware);

app.get('/api/v1/products', (req,res)=>{
    res.json({
        response: 'SUCCESS'
    });
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})
