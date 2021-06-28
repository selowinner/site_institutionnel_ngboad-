import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import BlogCategorie from './BlogCategorie'

/**
 * @swagger
 * components:
 *  schemas:
 *    BlogArticleDto:
 *      type: object
 *      properties:
 *        categorie_id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        has_link:
 *          type: boolean
 *        link:
 *          type: string
 *        description:
 *          type: string
 *      required:
 *        - title
 *    BlogArticle:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        categorie_id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        has_link:
 *          type: boolean
 *        link:
 *          type: string
 *        description:
 *          type: string
 *        categorie:
 *          "$ref": '#/components/schemas/BlogCategorieSimple'
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *      required:
 *        - title
 *    BlogArticleSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        categorie_id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        has_link:
 *          type: boolean
 *        link:
 *          type: string
 *        description:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *      required:
 *        - title
 *    BlogArticles:
 *      type: object
 *      properties:
 *        blog_articles:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/BlogArticle'
 *    BlogArticleSimples:
 *      type: object
 *      properties:
 *        blog_articles:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/BlogArticleSimple'
 */
export default class BlogArticle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public categorie_id: number|null

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public image: String|null

  @column()
  public has_link: Boolean

  @column()
  public link: String|null

  @column()
  public description: String|null

  @belongsTo(() => BlogCategorie, {
    localKey: 'categorie_id'
  })
  public categorie: BelongsTo<typeof BlogCategorie>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
