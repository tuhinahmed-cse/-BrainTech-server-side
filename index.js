const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const Port = process.env.Port || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
        const category_course = courses.find(c => c.category_id === id);
        res.send(category_course);
})


app.get('/courses', (req, res) =>{
    res.send(courses);
});
app.listen(Port, ()=>{
    console.log('server Running', Port);
})
