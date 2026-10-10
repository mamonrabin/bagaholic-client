import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
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
    <Footer/>
    </div>;
};

export default layout;
