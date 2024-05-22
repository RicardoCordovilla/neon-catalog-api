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

const getAllRatePaginated = (req, res) => {
    const { page, pageSize } = req.query
    articlesControllers.getAllRatePaginated(page, pageSize)
        .then((response) => {
            let hasMore = true
            const count = response.count
            const mod = count % pageSize
            let totalPages = Math.ceil(response.count / pageSize)
            const rowsInpage = response.rows.length
            if (mod == 0) totalPages -= 1
            if (Number(page) >= totalPages) hasMore = false
            if (pageSize > rowsInpage) hasMore = false
            console.log(
                'totalPages:', totalPages, ' page:', Number(page),
                '\n hasMore:', hasMore
            )
            res.status(200).json({
                results: response.rows,
                count: response.count,
                totalPages: Math.ceil(response.count / pageSize),
                hasMore: hasMore,
            })
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const getAllLatestPaginated = (req, res) => {
    const { page, pageSize } = req.query
    articlesControllers.getAllLatestPaginated(page, pageSize)
        .then((response) => {
            let hasMore = true
            const count = response.count
            const mod = count % pageSize
            let totalPages = Math.ceil(response.count / pageSize)
            const rowsInpage = response.rows.length
            if (mod == 0) totalPages -= 1
            if (Number(page) >= totalPages) hasMore = false
            if (pageSize > rowsInpage) hasMore = false
            console.log(
                'totalPages:', totalPages, ' page:', Number(page),
                '\n hasMore:', hasMore
            )
            res.status(200).json({
                results: response.rows,
                count: response.count,
                totalPages: Math.ceil(response.count / pageSize),
                hasMore: hasMore,
            })
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}


const searchArticles = (req, res) => {
    const { search, page, pageSize } = req.query
    articlesControllers.searchArticles(search, page, pageSize)
        .then((response) => {
            let hasMore = true
            const count = response.count
            const mod = count % pageSize
            let totalPages = Math.ceil(response.count / pageSize)
            const rowsInpage = response.rows.length
            if (mod == 0) totalPages -= 1
            if (Number(page) >= totalPages) hasMore = false
            if (pageSize > rowsInpage) hasMore = false
            console.log(
                'totalPages:', totalPages, ' page:', Number(page),
                '\n hasMore:', hasMore
            )
            res.status(200).json({
                results: response.rows,
                count: response.count,
                totalPages: Math.ceil(response.count / pageSize),
                hasMore: hasMore,
            })
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
    getAllRatePaginated,
    getAllLatestPaginated,
    getArticleById,
    createArticle,
    updateArticle,
    updateRaiting,
    searchArticles
}