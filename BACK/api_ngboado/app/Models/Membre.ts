import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import TypeMembre from './TypeMembre'
import MembreBureau from './MembreBureau'

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

  @belongsTo(() => TypeMembre, {
    'foreignKey': 'type_membre_id'
  })
  public type: BelongsTo<typeof TypeMembre>
  
  @hasMany(() => MembreBureau, {
    'foreignKey': 'membre_id'
  })
  public bureaux: HasMany<typeof MembreBureau>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
