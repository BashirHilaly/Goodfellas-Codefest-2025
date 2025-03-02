import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const insertGeneration = mutation({
    args: {
        // userId: v.string(),
        input: v.object({
            room_type: v.string(),  
            project_description: v.string(),
            room_surface_area: v.number(),
            building_materials: v.array(v.string()),
            address: v.string(),
            estimated_time_frame: v.string(),
        })
    },
    handler: async (ctx, args) => {

        // dummy userId
        const userId = "123";

        const input = args.input;

        // Testing with dummy data
        const generation = await ctx.db.insert("generations", {
            userId,
            input,
            output: {
                tasks_list: [
                    {
                        task_name: "Task 1",
                        task_description: "Description 1",
                        sub_tasks: [
                            { sub_task_name: "Sub Task 1", sub_task_description: "Sub Task Description 1" },
                            { sub_task_name: "Sub Task 2", sub_task_description: "Sub Task Description 2" },
                        ],
                        task_materials: [
                            {
                                material_name: "Material 1",
                                material_quantity: 10,
                                material_unit_price: 10,
                            }
                        ],
                    },
                ],
            },
        });


        return generation;
    }   
})