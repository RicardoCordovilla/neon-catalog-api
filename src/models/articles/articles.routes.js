const router = require('express').Router()
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)
const articlesServices = require('./articles.services')

router.get('/raiting', articlesServices.getAllByRaiting)
router.get('/rate/paginated', articlesServices.getAllRatePaginated)
router.get('/search', articlesServices.searchArticles)
router.get('/', articlesServices.getAllArticles)
router.get('/id/:id', articlesServices.getArticleById)

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    articlesServices.createArticle
)
router.patch('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    articlesServices.updateArticle
)

router.patch('/raiting/:id',
    // passport.authenticate('jwt', { session: false }),
    articlesServices.updateRaiting
)


module.exports = router

