import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    generations: defineTable({
        userId: v.string(),
        input: v.object({
            room_type: v.string(),
            project_description: v.string(),
            room_surface_area: v.number(),
            building_materials: v.array(v.string()),
            address: v.string(),
            estimated_time_frame: v.string(),
        }),
        output: v.object({
            tasks_list: v.array(v.object({
                task_name: v.string(),
                task_description: v.string(),
                sub_tasks: v.array(v.object({
                    sub_task_name: v.string(),
                    sub_task_description: v.string(),
                })),
                task_materials: v.optional(v.array(v.object({
                    material_name: v.string(),
                    material_quantity: v.number(),
                    material_unit_price: v.number(),
                }))),
            })),
        }),

    })
});