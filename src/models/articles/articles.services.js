const articlesControllers = require('./articles.controllers')

const getAllArticles = (req, res) => {
    articlesControllers.getAllArticles()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const getAllByRaiting = (req, res) => {
    articlesControllers.getAllByRaiting()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const getArticleById = (req, res) => {
    const id = req.params.id
    articlesControllers.getArticleById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const createArticle = (req, res) => {
    const { title, description, stock, rent, active, urlsImages, options, tags } = req.body
    articlesControllers.createArticle({ title, description, stock, rent, active, urlsImages, options, tags })
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const updateArticle = (req, res) => {
    const { title, description, stock, rent, active, urlsImages, options, tags } = req.body
    id = req.params.id
    articlesControllers.updateArticle(id, { title, description, stock, rent, active, urlsImages, options, tags })
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const updateRaiting = (req, res) => {
    // const { raiting } = req.body
    id = req.params.id
    articlesControllers.updateRaiting(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}
module.exports = {
    getAllArticles,
    getAllByRaiting,
    getArticleById,
    createArticle,
    updateArticle,
    updateRaiting
}