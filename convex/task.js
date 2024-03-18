import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

// export const getByid = query({
//     args:{
//         id:v.string()
//     },
//     handler:async(ctx,args)=>{
//         console.log(args);
//         const result = await ctx.db.query('tasks')
//         .filter((q)=>q.eq(q.field('_id'),args.id))
//         .collect()
// console.log(result);
//         return result
//     }
// })
export const create= mutation({
    
    args:{
        text:v.string(),
        isCompleted:v.boolean()
    },
    handler:async(ctx,args)=>{
        console.log(args,'debug');
        return await ctx.db.insert("tasks",args)
    }
})

//brandedFoods
export const getBrandedFoods = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query("brandedFoods").take(15);
    },
  });

  //brandedFoods25
  export const getBrandedFood2 = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query("brandedFoods").take(2);
    },
  });

  // demo
  export const getDemo = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query("demo").take(1);
    },
  });