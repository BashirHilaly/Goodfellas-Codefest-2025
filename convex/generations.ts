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
        
    }   
})