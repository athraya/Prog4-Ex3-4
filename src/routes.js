"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("You did it! I am now running:) ").end();
    });


    app.get('/api/course', async (req, res) => {
        console.log("=================");
        let query;
        if (req.query.course_name) {
            let _course_name = req.query.course_name;
            query = database.query(
                'select * from course where name = ?',
                [_course_name]
            );
        } else {
            query = database.query(
                'SELECT * FROM course'
            );
        }
        console.log(query);
        const courses = await query;

        res.status(200).send(JSON.stringify(courses)).end();
    });



    app.get('/api/course/:code', async (req, res) => {
        let _id = req.params.id;
        const query = database.query(
            'select * from course where code = ?',
            [_id]
        );
        const courses = await query;
        res.status(200).send(JSON.stringify(courses)).end();
    });

    app.post('/api/course', async (req, res) => {
        let _course_code = req.body.course_code;
        let _course_name = req.body.course_name;
        let _course_desc = req.body.course_desc;

        const query = database.query(
            'insert into course(code, name, description) values (?, ?, ?)',
            [_code, _name, _description]
        );
        const courses = await query;
        res.status(200).send('Course added successfully!').end();
    });

    app.put('/api/course', async (req, res) => {
        let _course_desc = req.body.course_desc;
        let _id = req.body.id;

        const query = database.query(
            'update course set description = ? where  code = ?',
            [_course_desc, _id]
        );
        const courses = await query;
        res.status(200).send('Course updated successfully!').end();

    })

};
