import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    if(!await knex.schema.hasTable("category")){
        return await knex.schema.createTable("category",(field)=>{
            field.increments();
            field.string("category_name");
            field.timestamp("created_at");
            field.timestamp("updated_at");
        })
    }
}

export async function down(knex: Knex): Promise<void> {
}

