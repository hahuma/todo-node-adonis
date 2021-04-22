import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('description').notNullable()
      table.boolean('completed').defaultTo(false)
      table.integer('ProjectId').unsigned()
      table.foreign('ProjectId')
              .references('projects.id')
              .onDelete('CASCADE')
      table.date('finishDate').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
