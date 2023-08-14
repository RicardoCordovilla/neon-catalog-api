const router = require('express').Router()
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)
const articlesServices = require('./articles.services')

router.get('/', articlesServices.getAllArticles)
router.get('/:id', articlesServices.getArticleById)

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    articlesServices.createArticle
)
router.patch('/:id',
    // passport.authenticate('jwt', { session: false }),
    articlesServices.updateArticle
)


module.exports = router

