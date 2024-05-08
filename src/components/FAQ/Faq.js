import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "How does sensor integration enhance the compactness and flexibility of Our watches?",
            content: `The integration of sensors in your watches allows for a compact design that does not compromise functionality. This includes personalized features like health tracking and GPS navigation, significantly enhancing the appeal and perceived value of our watches. The flexibility offered by these features makes your watches ideal for users who value both form and function in their daily lives.`,
        },
        {
            title: "How do standardizing chips across different watch models optimize logistics?",
            content:
                "Standardizing chips for various watch models simplifies your inventory management and reduces logistical costs. This approach ensures consistency in parts, which streamlines production and maintenance, making your supply chain more efficient and cost-effective.",
        },
        {
            title: "How does the chip enable customization of watch features through the companion app?",
            content: `With the chip, manufacturers can offer a Large Catalogue panel of features such as activity tracking, mobile notifications, or other connected services directly through the companion app.`,
        },
        {
            title: "Will the integration of this technology affect the aesthetics of the watch?",
            content: "No, the microchip is designed to be compact and discreet, ensuring that it does not disrupt the elegant aesthetics that define our luxury watches.",
        },
        {
            title:"Can the watch receive updates after purchase?",
           content:"Yes, the chip in our watches can receive software updates through a companion app, allowing us to enhance performance and add new features without any physical intervention "
            

        }
    ],
};

const styles = {
     bgColor: 'white',
    titleTextColor: "#3C654D",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
     animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function Fq() {

    return (
        <div style={{marginTop:"180px"}}>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}