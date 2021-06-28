import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    CategoriePartenaire:
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
 *          type: CategoriePartenaire
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
 *    CategoriePartenaireDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        parent_id:
 *          type: integer
 *      required:
 *        - title
 *     CategoriePartenaireSimple:
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
 *    CategoriePartenaireSimples:
 *      type: object
 *      properties:
 *        categorie_partenaires:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/CategoriePartenaireSimple'
 *    CategoriePartenaires:
 *      type: object
 *      properties:
 *        categorie_partenaires:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/CategoriePartenaire'
 */
export default class CategoriePartenaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public parent_id: number|null

  @belongsTo(() => CategoriePartenaire, {
    localKey: 'parent_id'
  })
  public parent: BelongsTo<typeof CategoriePartenaire>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
