import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import CategoriePartenaire from './CategoriePartenaire'

/**
 * @swagger
 * components:
 *  schemas:
 *    Partenaire:
 *      type: object
 *      properties:
 *        id:
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
 *        slogan:
 *          type: string
 *        description:
 *          type: string
 *        categorie_id:
 *          type: integer
 *        categorie:
 *          "$ref": '#/components/schemas/CategoriePartenaireSimple'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - categorie_id
 *        - title
 *        - image
 *    PartenaireDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        image:
 *          type: string
 *        has_link:
 *          type: boolean
 *        link:
 *          type: string
 *        slogan:
 *          type: string
 *        description:
 *          type: string
 *        categorie_id:
 *          type: integer
 *      required:
 *        - categorie_id
 *        - title
 *        - image
 *    PartenaireSimple:
 *      type: object
 *      properties:
 *        id:
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
 *        slogan:
 *          type: string
 *        description:
 *          type: string
 *        categorie_id:
 *          type: integer
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - categorie_id
 *        - title
 *        - image
 *    PartenaireSimples:
 *      type: object
 *      properties:
 *        partenaires:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/PartenaireSimple'
 *    Partenaires:
 *      type: object
 *      properties:
 *        partenaires:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/Partenaire'
 */
export default class Partenaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: String|null
  
  @column()
  public title: String|null
  
  @column()
  public image: String|null
  
  @column()
  public has_link: Boolean

  @column()
  public link: String|null
  
  @column()
  public slogan: String|null

  @column()
  public description: String|null

  @column()
  public categorie_id: number

  @belongsTo(() => CategoriePartenaire, {
    localKey: 'categorie_id'
  })
  public categorie: BelongsTo<typeof CategoriePartenaire> 
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
