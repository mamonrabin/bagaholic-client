import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MessengerBtn from "@/components/layout/MessengerBtn";
import ScrollToBottomToTop from "@/components/layout/ScrollToBottomToTop";
import React from "react";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="">
     <AnnouncementBar/>
     <Header/>
     <MessengerBtn />
     <ScrollToBottomToTop />
    {children}
    <Footer/>
    </div>;
};

export default layout;
