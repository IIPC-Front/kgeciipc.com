const router = require('express').Router();

// 1. Home Page
router.get("/", (req, res) => {
    res.render('index');
});

// 2. Team (Same as Faculty)
router.get("/team", (req, res) => {
    res.render('team');
});

// 3. Faculty
router.get("/faculty", (req, res) => {
    res.render('team');
});

// 4. Student Team
router.get("/student", (req, res) => {
    res.render('student');
});

// 5. Advisory Board
router.get("/advisory", (req, res) => {
    res.render('advisory-board');
});

// 6. Activities
router.get("/activity", (req, res) => {
    res.render('activity');
});

// 7. Training
router.get("/training", (req, res) => {
    res.render('training');
});

// 8. Inhouse
router.get("/inhouse", (req, res) => {
    res.render('inhouse');
});

// 9. Inplant
router.get("/inplant", (req, res) => {
    res.render('inplant');
});

// 10. Certification Programme
router.get("/certification", (req, res) => {
    res.render('certification');
});

// 11. Industrial Programme
router.get("/industrial", (req, res) => {
    res.render('industrial-programme');
});

// 12. Downloads
router.get("/downloads", (req, res) => {
    res.render('downloads');
});

module.exports = router;