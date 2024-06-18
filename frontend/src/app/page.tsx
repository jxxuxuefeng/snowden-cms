"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormData = {
  username: string;
  password: string;
};

export default function Home() {
  const form = useForm();

  const onSubmit = () => {
    console.log(form.getValues());
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      <main className="px-8 py-16 flex flex-col items-center">
        <div className="w-[552px] px-14 py-12 border bg-white shadow">
          <div className="flex items-center flex-col">
            <img
              src={"logo.svg"}
              className="w-[4.5rem] pb-3"
              title="logo"
              alt="logo"
            />
            <div className="text-2xl pb-2 font-bold">欢迎使用 snowden CMS</div>
            <div className="text-sm pb-2 text-gray-600">登录您的账户</div>
          </div>
          <div className="w-full flex flex-col space-y-6">
            <div className="space-y-2">
              <Form {...form}>
                <FormField
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center font-[600] text-[0.75rem]">
                        用户名<span className="text-red-700 text-sm">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="例如: admin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  name={"username"}
                />
                <FormField
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center font-[600] text-[0.75rem]">
                        密码<span className="text-red-700 text-sm">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      {/*<FormDescription>des</FormDescription>*/}
                      <FormMessage />
                    </FormItem>
                  )}
                  name={"password"}
                />
              </Form>
            </div>
            <div className="flex items-center" space-x-2>
              <Checkbox id="terms" />
              <label htmlFor="terms" className="cursor-pointer">
                记住我
              </label>
            </div>
            <Button size="sm" onClick={onSubmit}>
              登录
            </Button>
          </div>
        </div>
        <div className="pt-4">
          <Button variant="link">
            <Link href="#">忘记密码？</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
