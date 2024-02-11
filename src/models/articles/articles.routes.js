const router = require('express').Router()
const apicache = require('apicache');
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)
const articlesServices = require('./articles.services')

let cache = apicache.middleware;

router.get('/raiting', cache('7 days'),articlesServices.getAllByRaiting)
router.get('/rate/paginated', cache('7 days'),articlesServices.getAllRatePaginated)
router.get('/search',cache('7 days'), articlesServices.searchArticles)
router.get('/', cache('7 days'),articlesServices.getAllArticles)
router.get('/id/:id',cache('7 days'), articlesServices.getArticleById)

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

