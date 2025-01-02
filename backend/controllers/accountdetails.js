
const Account = require('../models/accountdetails');


exports.createOrUpdateAccountInfo = async (req, res) => {
    const { name, address,number,email } = req.body;
    console.log('name ,address,number,email',name,address,number,email)

    try {
        const user = await Account.findOneAndUpdate(
            {email:email},
            { name: name, address:address,number:number },

          
            { new: true,upsert:true }
        );

        if (user) {
            console.log('Updated Account', user);
            res.json(user);
        } else {
            const newAccount = await new Account({
                email,
                name: name,
                address:address,
                number:number
            }).save();
            console.log('Created', newAccount);
            res.json(newAccount);
        }
    } catch (error) {
        console.error('Error in createOrUpdateAccount:', error);
        res.status(500).send('Server error');
    }
};

exports.currentUser=async (req,res)=>{
    console.log('req',req)
    const user=await Account.findOne({email:req.user.email}).exec()
    res.json(user)
}



