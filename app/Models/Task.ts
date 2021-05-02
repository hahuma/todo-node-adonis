import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Project from 'App/Models/Project'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Project, {
  	foreignKey: 'id'
  })
  public ProjectId: BelongsTo<typeof Project>

  @column()
  public description: string

  @column()
  public finishDate: DateTime

  @column()
  public completed: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
