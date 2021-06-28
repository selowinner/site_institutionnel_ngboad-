import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    BlogCategorieDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        parent_id:
 *          type: integer
 *      required:
 *        - title
 *    BlogCategorieSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        parent_id:
 *          type: integer
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *      required:
 *        - title
 *    BlogCategorie:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        parent_id:
 *          type: integer
 *        parent:
 *          type: BlogCategorie
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *      required:
 *        - title
 *    BlogCategorieSimples:
 *      type: object
 *      properties:
 *        blog_categories:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/BlogCategorieSimple'
 *    BlogCategories:
 *      type: object
 *      properties:
 *        blog_categories:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/BlogCategorie'
 */
export default class BlogCategorie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public parent_id: number|null

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @belongsTo(() => BlogCategorie, {
    localKey: 'parent_id'
  })
  public parent: BelongsTo<typeof BlogCategorie>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
