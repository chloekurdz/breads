const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/new', (req, res) => {
    res.render('new')
})

breads.get('/:indexArray/edit', (req,res) => {
    if (Bread[req.params.indexArray]) {
    res.render('edit', {
        bread: Bread[req.params.indexArray],
        index: req.params.indexArray,
        title: 'Index Page'
    })
} else {
     res.render('404')
}
})

breads.put('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})
  

module.exports = breads