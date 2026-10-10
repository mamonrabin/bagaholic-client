import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import React from "react";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>
     <AnnouncementBar/>
     <Header/>
    {children}
    </div>;
};

export default layout;
