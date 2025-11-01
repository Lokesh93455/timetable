const getUserById = async (userId) => {
  const user = await userModel.findById(userId).select("-password"); // hide password
  if (!user) throw new Error("User not found");
  return user;
};


module.exports={getUserById };