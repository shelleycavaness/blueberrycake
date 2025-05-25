import React from "react";
import Layout from "../globalComponents/layout";
import HeaderSection from "../globalComponents/headerSection";
import SectionHeading from "../globalComponents/sectionHeading";

const Aboutus1 = () => (
    <Layout>
        <HeaderSection />
        <div style={{minHeight:"100vh", display:"flex", alignItems:"center",justifyContent:"center"}}>
            <SectionHeading
                title="404"
                titleBg="Page Not Found"
            />
        </div>
    </Layout>
)

export default Aboutus1;
