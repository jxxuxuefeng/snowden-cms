"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWithIcon } from "@/components/ui/inputWithIcon";
import { request } from "@/lib/request";
import { useGlobalStore } from "@/store/global.store";
import { toast } from "@/components/ui/use-toast";
import { local } from "roodash";

const FormSchema = z.object({
  username: z.string().min(1, {
    message: "用户名不能为空",
  }),
  password: z.string().min(1, {
    message: "密码不能为空",
  }),
});

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const setToken = useGlobalStore((state) => state.setToken);
  const setUserInfo = useGlobalStore((state) => state.setUserInfo);
  const token = useGlobalStore((state) => state.token);
  console.log(token, "token");

  const onSubmit = async () => {
    const username = form.getValues("username");
    const password = form.getValues("password");
    try {
      const res = await request.post<null, { jwt: string; user: any }>(
        "/auth/local",
        {
          identifier: username,
          password: password,
        },
      );

      toast({
        description: "登录成功",
        duration: 2000,
      });

      local.set("token", res.jwt);
      // localStorage.setItem("token", res.jwt);
      setToken(res.jwt);
      setUserInfo(res.user);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 bg-[url('/login-bg.png')] [background-size:100%_100%]">
      <main className="px-8 pt-16 flex flex-col items-center">
        <div className="w-[552px] px-14 py-12 border bg-white shadow">
          <div className="flex items-center flex-col">
            <Image
              src={"/logo.png"}
              className="pb-3"
              title="logo"
              width={72}
              height={72}
              alt="logo"
            />
            <div className="text-2xl py-6 font-bold">欢迎使用 snowden CMS</div>
          </div>
          <div className="w-full flex flex-col space-y-6">
            <div className="space-y-6">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center font-[600] text-[0.75rem]">
                        用户名<span className="text-red-700 text-sm">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="请输入用户名" {...field} />
                      </FormControl>
                      <FormMessage className="absolute text-xs font-normal" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center font-[600] text-[0.75rem]">
                        密码<span className="text-red-700 text-sm">*</span>
                      </FormLabel>
                      <FormControl>
                        <InputWithIcon
                          placeholder="请输入密码"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute text-xs font-normal" />
                    </FormItem>
                  )}
                />
              </Form>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="cursor-pointer text-sm">
                  自动登录
                </label>
              </div>
              <Button variant="link" className="px-0">
                <Link href="#">忘记密码？</Link>
              </Button>
            </div>
            <Button onClick={form.handleSubmit(onSubmit)}>登 录</Button>
          </div>
        </div>
        <div className="mt-16 text-gray-400">&copy; Powered by snowden.xu</div>
      </main>
    </div>
  );
}
