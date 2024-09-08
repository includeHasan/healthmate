"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function page() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Create project</CardTitle>
        <CardDescription className="text-gray-500">Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-sm font-medium">Name</Label>
              <Input id="name" placeholder="Name of your project" className="border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-sm font-medium">Framework</Label>
              <Select className="border border-gray-300 rounded-md px-3 py-2">
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" className="text-gray-500" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-gray-500">Cancel</Button>
        <Button className="bg-blue-500 text-white">Deploy</Button>
      </CardFooter>
    </Card>
  )
}
