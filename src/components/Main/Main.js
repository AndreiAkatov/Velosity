import FirstSection from "../FirstSection/FirstSection";
import TabsSection from "../TabsSection/TabsSection";
import InfoSection from "../InfoSection/InfoSection";
import ServicesSection from "../ServicesSection/ServicesSection";

function Main() {
    return (
        <main className="main">
            <FirstSection />
            <InfoSection />
            <ServicesSection />
            <TabsSection />
        </main>
    );
}

export default Main;