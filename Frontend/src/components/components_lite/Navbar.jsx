import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7x1h-16">
           <div>
              <h1 className="text-2x1 font-bold">
                Job <sapn className="text-[#022bf8]">Portal</sapn>
              </h1> 
            </div>
            <div  className="flex items-center gap-3">
               <ul className="flex font-medium items-center gap-6">
                 <li>Home</li>
                 <li>Browse</li>
                 <li>Jobs</li>
               </ul>
               <Popover>
                  <PopoverTrigger asChild>
                   <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png"  alt="@shadcn"/>
                   </Avatar>
                  </PopoverTrigger>
                 <PopoverContent className="w-80">
                  <div  className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                     <AvatarImage src="https://github.com/shadcn.png"  alt="@shadcn"/>
                  </Avatar>
                   <div>
                    <h3 className="font-medium">Himanshi</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                  </div>
                  
                <div className="flex flex-col my-2 text-gray-600  ">
                  {user && user.role === "Student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2></User2>
                      <Button variant="link">
                        {" "}
                        <Link to={"/Profile"}> Profile</Link>{" "}
                      </Button>
                    </div>
                  )}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut></LogOut>
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                  </div>
                  </PopoverContent>
               </Popover>
            </div>
        </div>
    </div>
  )
}

export default Navbar
