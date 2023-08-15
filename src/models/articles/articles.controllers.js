const uuid = require('uuid')
const Articles = require('./articles.model')

const getAllArticles = async () => {
    const data = await Articles.findAll({ order: [['updatedAt', 'DESC']] })
    return data
}

const getAllByRaiting = async () => {
    const data = await Articles.findAll({ order: [['raiting', 'DESC']] })
    return data
}

const getArticleById = async (id) => {
    const data = await Articles.findOne(
        { where: { id } }
    )
    return data
}

const createArticle = async (data) => {
    const newArticle = Articles.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        stock: data.stock,
        rent: data.rent,
        active: data.active,
        urlsImages: data.urlsImages,
        options: data.options,
        tags: data.tags
    })
    return newArticle
}

const updateArticle = async (id, body) => {
    const result = await Articles.update(body, {
        where: { id }
    })
    return result
}

const updateRaiting = async (id) => {
    const result = await Articles.sum('raiting', {
        where: { id }
    })
    return result
}
module.exports = {
    getAllArticles,
    getAllByRaiting,
    getArticleById,
    createArticle,
    updateArticle,
    updateRaiting
}

