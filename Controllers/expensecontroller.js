const UserModel = require("../Models/User");

 

 const addexpenses = async(req,res) => {
    const body = req.body;
    const { _id } = req.user;
    try{
         const userdata = await UserModel.findByIdAndUpdate(
            _id, //user_id
             {
                $push: {expenses: body}
             },
             {new: true} //for rreturning the updated documents

          );
          return res.status(200).json({
            message: "expense added successfully",
            success: true,
            data: userdata?.expenses
          });
          
    } catch (err){
        return res.status(500).json({
            message: "something went wrong",
            error: err,
            success: false
        })
    }
 }

 const fetchexpenses = async(req,res)=>{
   const body = req.body;
   const { _id } = req.user;
   try{
        const userdata = await UserModel.findById(_id).select('expenses');  
         return res.status(200).json({
           message: "Fetched  expenses successfully",
           success: true,
           data: userdata?.expenses
         });
         
   } catch (err){
       return res.status(500).json({
           message: "something went wrong",
           error: err,
           success: false
       })
   }
 }

 const deletexpenses = async(req,res)=>{
    const { _id } = req.user;
    const { expenseId } = req.params;
    try{
         const userdata = await UserModel.findByIdAndUpdate(
            _id, //user_id
             {
                $pull: {expenses: {_id: expenseId}}
             },
             {new: true} //for rreturning the updated documents

          );
          return res.status(200).json({
            message: "expense Deleted successfully",
            success: true,
            data: userdata?.expenses
          });
          
    } catch (err){
        return res.status(500).json({
            message: "something went wrong",
            error: err,
            success: false
        })
    }
 } 

 module.exports = {
    addexpenses,
    fetchexpenses,
    deletexpenses
 }
