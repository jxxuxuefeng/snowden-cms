import Link from "next/link";
import Image from "next/image";
import { Blocks, Bolt, Film, FolderKanban, Store } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const Admin = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-60 bg-gray-50 h-screen border-solid border-r border-r-gray-200">
        <Link href="/admin">
          <div className="flex flex-row items-center border-solid border-b border-b-gray-200 px-4 py-3">
            <Image
              src={"/logo.png"}
              title="logo"
              width={30}
              height={30}
              alt="logo"
            />
            <div className="pl-2">
              <span className="text-sm font-medium">CMS控制面板</span>
              <p className="text-xs text-gray-500">工作区</p>
            </div>
          </div>
        </Link>
        <div className="flex-grow overflow-y-auto">
          <ul className="flex flex-col px-4 py-3 space-y-1">
            <Link href="/admin/content">
              <li className="flex flex-row space-x-2 w-full items-center px-3 py-2 cursor-pointer rounded-md text-blue-600 bg-blue-50">
                <FolderKanban className="w-5" />
                <span className="text-sm">内容管理器</span>
              </li>
            </Link>
            <Link href="/admin/media">
              <li className="flex flex-row space-x-2 w-full items-center px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-blue-50">
                <Film className="w-5" />
                <span className="text-sm">媒体库</span>
              </li>
            </Link>
            <li className="flex flex-row space-x-2 w-full items-center px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-blue-50">
              <Blocks className="w-5" />
              <span className="text-sm">插件</span>
            </li>
            <li className="flex flex-row space-x-2 w-full items-center px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-blue-50">
              <Store className="w-5" />
              <span className="text-sm">市场</span>
            </li>
            <li className="flex flex-row space-x-2 w-full items-center px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-blue-50">
              <Bolt className="w-5" />
              <span className="text-sm">设置</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border-solid border-t border-t-gray-200">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-blue-600 text-white">
              S
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-xs">
            <span className="text-sm font-medium">snowden.xu</span>
            <span className="text-gray-500">snowden.xu@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
