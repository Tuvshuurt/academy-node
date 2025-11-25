
const getUsers = async () => {
  const userRawData = await fs.readFile("users.json", "utf-8");

  const users = JSON.parse(userRawData);

  return users;
};
export const login = async (req, res) => {
const {email,password}=req.body


  const users =    [{ "email": "admin@gmail.com", "password": "123", "balance": 4000 }];

 const user = users.find(value => {
    return value.email === email && value.password === password;
  });

  if (!user) {
    
        res.send(
            "email eswel password buruu bn!"
    )
  } else {
    res.cookie("user", email, {
        httpOnly: true,
        secure: false
    });
    res.json({
        user: email
    });
  }
 
};

export const logout = (req, res) => {
  res.clearCookie("user");

  res.send("Success!");
};