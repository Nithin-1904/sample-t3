// import { api } from "@/trpc/server";
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SubmitHandler, useForm } from "react-hook-form";
import { blood, gender } from "./values";
import { FormElements } from "./type";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const { register,handleSubmit, formState:{errors} } = useForm<FormElements>();
  const onSubmit:SubmitHandler<FormElements> = (data)=>console.log(data)
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-5 rounded-lg border-[1px] bg-slate-400 p-5">
          <h1 className="text-2xl font-medium">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname">Firstname</Label>
              <Input
                type="text"
                id="firstname"
                placeholder="John"
                className="border-green-500 bg-white"
                {...register("firstname")}
              />
              {errors.firstname && <p>{errors.firstname.message}</p>}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname">Lastname</Label>
              <Input
                type="text"
                id="lastname"
                placeholder="Wick"
                className="border-green-500 bg-white"
                {...register("lastname")}
              />
              {errors.lastname && <p>{errors.lastname?.message}</p>}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="age">Age</Label>
              <Input
                type="number"
                id="age"
                placeholder="---"
                className="border-green-500 bg-white"
                {...register("age")}
              />
              {errors.age && <p>{errors.age.message}</p>}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="example@abc.xyz"
                className="border-green-500 bg-white"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="gender">Gender</Label>
              <RadioGroup className="grid grid-cols-2">
                {gender.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={item.toLowerCase()}
                      id={index.toString()}
                    />
                    <Label htmlFor={index.toString()}>{item}</Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.gender && <p>{errors.gender.message}</p>}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="blood">Blood Group</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue className="border-green-500" placeholder="Select a blood group" {...register("blood")} />
                  {errors.blood && <p>{errors.blood.message}</p>}
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {blood.map((item, index) => (
                      <SelectItem key={index.toString()} value={item.toLowerCase()}>{item}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          <Button> Submit </Button>
          </form>
        </div>
      </div>
    </>
  );
}

// async function CrudShowcase() {
//   const latestPost= await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
