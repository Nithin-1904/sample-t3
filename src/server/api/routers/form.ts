import z from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const data = z.object({
    firstname:z.string(),
    lastname:z.string(),
    age:z.number(),
    email:z.string().email(),
    gender:z.string().optional(),
    blood:z.string().optional()
})

export const formRouter = createTRPCRouter({
    submit: publicProcedure
    .input({data})
    .mutation(async(ctx,))
    }

})