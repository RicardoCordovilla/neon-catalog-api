const uuid = require('uuid')
const Articles = require('./articles.model')
const { Op, Sequelize } = require('sequelize')

const getAllArticles = async () => {
    const data = await Articles.findAll({ order: [['updatedAt', 'DESC']] })
    return data
}

const getAllByRaiting = async () => {
    const data = await Articles.findAll({ order: [['updatedAt', 'DESC']] })
    return data
}

const getAllRatePaginated = async (page, pageSize = 5) => {
    const offset = page * pageSize;
    const limit = pageSize;

    const data = await Articles.findAndCountAll({
        order: [['raiting', 'DESC']],
        offset,
        limit,
        attributes: ['id', 'title', 'urlsImages', 'raiting', 'options']
    })
    return data
}

const getAllLatestPaginated = async (page, pageSize = 5) => {
    const offset = page * pageSize;
    const limit = pageSize;

    const data = await Articles.findAndCountAll({
        order: [['updatedAt', 'DESC']],
        offset,
        limit,
        // attributes: ['id', 'title', 'urlsImages', 'raiting', 'options']
    })
    return data
}

const searchArticles = async (search, page, pageSize) => {
    const offset = page * pageSize;
    const limit = pageSize;

    const data = await Articles.findAndCountAll({
        where: {
            [Op.or]: [
                { title: { [Op.iLike]: `%${search}%` } },
                { description: { [Op.iLike]: `%${search}%` } },
                // { tags: { [Op.overlap]: ['decora'] } }
                // { options: { [Op.contains]: { keywords: 'price' } } }
            ]
        },
        offset,
        limit,
        // attributes: ['id', 'title', 'urlsImages']
        attributes: ['id', 'title', 'urlsImages', 'raiting', 'options']
    })
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
    const result = await Articles.increment({ raiting: 1 }, {
        where: { id }
    })
    return result
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

