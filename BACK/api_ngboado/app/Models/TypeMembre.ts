import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Membre from './Membre'

export default class TypeMembre extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public role: String|null

  @column()
  public slug: String|null

  @column()
  public role_priority: number

  @hasMany(() => Membre, {
    'foreignKey': 'type_membre'
  })
  public membres: HasMany<typeof Membre>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
