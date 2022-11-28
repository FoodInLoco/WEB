import { AppStoreApp, BottomBar, DesktopSocialList, Facebook, Footer, GetTheApp, GetTheAppTitle, GoogleApp, HR, Instagram, Menu, MenuHead, MenuLink, MobileSocialList, Policy, PolicyRow, TopBar, Twitter } from "./styles";

const menu = [

    {
        name: "Sobre Nós",
        links: [
            { title: "Fundadores", url: "www.openfit.com" },
            { title: "Instituição", url: "www.openfit.com" },
            { title: "Direitos", url: "www.openfit.com" },
            { title: "Privacy Policy", url: "www.openfit.com" },
            { title: "FAQ", url: "www.openfit.com" }
        ]
    }
];

const SocialList = () => (
    <>
        <Twitter />
        <Facebook />
        <Instagram />
    </>
);

export function FooterComponent() {
    return <Footer>
        {/* <TopBar>
            <GetTheApp>
                <GetTheAppTitle> FOOINLOCO</GetTheAppTitle>
                <AppStoreApp />
                <GoogleApp />
            </GetTheApp>
            <DesktopSocialList>
                <SocialList />
            </DesktopSocialList>
        </TopBar> */}
        <HR />
        <BottomBar>
            {menu.map(({ name, links }, index) => (
                <Menu key={index}>
                    <MenuHead>{name}</MenuHead>
                    {links.map(({ title, url }, index) => (
                        <MenuLink key={index} href={url}>{title}</MenuLink>
                    ))}
                </Menu>
            ))}
            <MobileSocialList>
                <SocialList />
            </MobileSocialList>
            <Policy>
                <PolicyRow>© 2022 FoodInLoco, LLC. All rights reserved.</PolicyRow>
                <PolicyRow>
                    +Results vary depending on starting point and effort. Exercise and
                    proper diet are necessary to achieve and maintain weight loss and
                    muscle definition. The testimonials featured may have used more than
                    one product or extended the program to achieve their maximum
                    results.
                </PolicyRow>
                <PolicyRow>
                    Consult your physician and follow all safety instructions before
                    beginning any exercise program or using any supplement or meal
                    replacement product, especially if you have any unique medical
                    conditions or needs. The contents on our website are for
                    informational purposes only, and are not intended to diagnose any
                    medical condition, replace the advice of a healthcare professional,
                    or provide any medical advice, diagnosis, or treatment.
                </PolicyRow>
                <PolicyRow>
                    © Copyright 2021 - FoodInLoco - Todos os direitos reservados FoodInLoco com Agência de Restaurantes Online S.A.

                </PolicyRow>
            </Policy>
        </BottomBar>
    </Footer>
}