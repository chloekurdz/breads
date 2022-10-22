const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/:arrayIndex', (req,res) => {
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex],
        title: 'Index Page'
    })
} else {
     res.send('404')
}
})

module.exports = breads