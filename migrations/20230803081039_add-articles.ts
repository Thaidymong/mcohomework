import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if(!await knex.schema.hasTable("articles")){
        return await knex.schema.createTable("articles",(field)=>{
            field.increments();
            field.string("title");
            field.string("summary");
            field.string("description");
            field.string("image");
            field.integer;
            field.timestamp("created_at");
            field.timestamp("updated_at");
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}

