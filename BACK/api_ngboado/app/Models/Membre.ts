import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import TypeMembre from './TypeMembre'
import MembreBureau from './MembreBureau'

/**
 * @swagger
 * components:
 *  schemas:
 *    Membre:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        fullname:
 *          type: string
 *        job: 
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        biographie:
 *          type: string
 *        type_membre_id:
 *          type: integer
 *        type_membre:
 *          "$ref": '#/components/schemas/TypeMembreSimple'
 *        bureaux:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/MembreBureauSimple'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - fullname
 *        - job
 *        - image
 *        - biographie
 *        - type_membre_id
 *    MembreDto:
 *      type: object
 *      properties:
 *        fullname:
 *          type: string
 *        job: 
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        biographie:
 *          type: string
 *        type_membre_id:
 *          type: integer
 *      required:
 *        - fullname
 *        - job
 *        - image
 *        - biographie
 *        - type_membre_id
 *    MembreSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        fullname:
 *          type: string
 *        job: 
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        biographie:
 *          type: string
 *        type_membre_id:
 *          type: integer
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - fullname
 *        - job
 *        - image
 *        - biographie
 *        - type_membre_id
 *    MembreSimples:
 *      type: object
 *      properties:
 *        membres:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/MembreSimple'
 *    Membres:
 *      type: object
 *      properties:
 *        membres:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/Membre'
 */
export default class Membre extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: String|null

  @column()
  public job: String|null

  @column()
  public fullname: String|null
  
  @column()
  public image: String|null

  @column()
  public biographie: String|null

  @column()
  public type_membre_id: number

  @belongsTo(() => TypeMembre, {
    localKey: 'type_membre_id',
    foreignKey: 'id'
  })
  public type_membre: BelongsTo<typeof TypeMembre>

  @hasMany(() => MembreBureau, {
    foreignKey: 'membre_id',
    localKey: 'id'
  })
  public bureaux: HasMany<typeof MembreBureau>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
