import  express  from "express";
import { Article } from "../../../../common/types/DBTables";
import knexInstance from "../../utils/db";

const router = express.Router();
router.get("/", async (req, res) => {
    try{ 
        // Query the database using Knex
        const result: Article[] = await knexInstance("articles") // array defined as result awaits "articles" table
        .select('*') // Selects all columns ("id","title", etc.)
        .orderBy("creation_date", "desc")
        .limit(3) ; // ; here??
        
        if(result.length==0){
        throw new Error ("No data found")
        }
      
        console.log("4 articles retrieved successfully from the database", result)
        res.json(result) // Sends response to client

    }catch(error){
        console.log("Error retrieving data from the database:", error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})
export default router;