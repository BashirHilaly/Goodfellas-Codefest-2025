import OpenAI from "openai";
import { action } from "./_generated/server";
import { v } from "convex/values";

const prompt = `
    You are a home renovation expert.
    You are given a description of a room, its dimensions, and the materials used.
    You need to generate a list of tasks that need to be completed to renovate the room.
    You need to generate a list of materials that need to be purchased to complete the tasks.

    It MUST be in the following JSON format:
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
        })
`

export const testOpenAi = action({
    args: {
        image: v.string(),  
    },
    handler: async (ctx, args) => {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "user",
                        content: [
                            { type: "text", text: "Describe this image in one sentence" },
                            { type: "image_url", image_url: { url: `data:image/jpeg;base64,${args.image}` }}
                        ]
                    }
                ]
            });

            if (response.choices[0].message.content) {
                console.log(response.choices[0].message.content);
                return response.choices[0].message.content;
            }
            else {
                return "error";
            }
        }
        catch (error) {
            console.error("Error generating template:", error);
        }
    }
})
export const generateEstimate = action({
    args: {
        roomType: v.string(),
        roomWidth: v.number(),
        roomLength: v.number(),
        projectDescription: v.string(),
        usedMaterials: v.array(v.string()),
        address: v.string(),
        estimatedTimeFrame: v.string(),
        zipcode: v.string(),
        photoUri: v.string(),
    },
    handler: async (ctx, args) => {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        try {
            const newPrompt = `This is the project description ${args.projectDescription}` + prompt
            const response = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "user",
                  content: [
                    { type: "text", text: prompt },
                    { type: "image_url", image_url: { url: `data:image/jpeg;base64,${args.photoUri}`}}
                  ]
                }
              ],
              max_tokens: 1000,
            });
      
            if (response.choices[0].message.content) {
              const responseContent = JSON.parse(response.choices[0].message.content.replace(/```json\n|\n```/g, ''));

              return responseContent;
            }
            else {
              return "error";
            }
      
          } catch (error) {
            console.error("Error generating template:", error);

            throw error;
          }

    }
})

