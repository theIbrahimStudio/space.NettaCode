import { Input } from "@ibrahimstudio/input";
import { useWindow } from "@ibrahimstudio/react";
import useGraph from "../content/graph";
import PrimButton from "../formel/buttons";
import { Container, Section } from "../layout/frames";
import Img from "../media/images";
import { Send } from "../content/icons";
import styles from "./styles/navbar.module.css";

const Footer = () => {
  const { width } = useWindow();
  const { P } = useGraph();

  return (
    <Container backgroundColor="var(--color-secondary)" padding={width <= 910 ? (width > 700 ? "2.5em" : "1.25em") : "6.25em 9.375em"} gap="3.1em">
      <Img className={styles.logo} src="/png/logo.png" alt="Logo Netta Code Indonesia" onClick={() => {}} />
      <Section cwidth="100%" direction="row" justifyContent="space-between" isWrap overflow="visible">
        <Section gap="0.6em" color="var(--color-foreground)">
          <P color="inherit" weight="700">
            Pages
          </P>
          <Section color="var(--color-foreground)" gap="0.3em">
            <P color="inherit" weight="400">
              Home
            </P>
            <P color="inherit" weight="400">
              About Us
            </P>
            <P color="inherit" weight="400">
              Services
            </P>
            <P color="inherit" weight="400">
              Portfolio
            </P>
            <P color="inherit" weight="400">
              FAQ
            </P>
            <P color="inherit" weight="400">
              Blog
            </P>
            <P color="inherit" weight="400">
              Contact Us
            </P>
          </Section>
        </Section>
        <Section gap="0.6em" color="var(--color-foreground)">
          <P color="inherit" weight="700">
            Company
          </P>
          <Section color="var(--color-foreground)" gap="0.3em">
            <P color="inherit" weight="400">
              Licensing
            </P>
            <P color="inherit" weight="400">
              Instructions
            </P>
            <P color="inherit" weight="400">
              Style Guide
            </P>
            <P color="inherit" weight="400">
              Changelog
            </P>
          </Section>
        </Section>
        <Section gap="3.1em" maxWidth="18.7em">
          <Section gap="0.6em" color="var(--color-foreground)">
            <P color="inherit" weight="700">
              Address
            </P>
            <Section color="var(--color-foreground)" gap="0.3em">
              <P color="inherit" weight="400">
                Jl. Profesor Dokter H. Hadari Nawawi, Pontianak, Indonesia
              </P>
              <P color="inherit" weight="400">
                View on Maps
              </P>
            </Section>
          </Section>
          <Section gap="0.6em" color="var(--color-foreground)">
            <P color="inherit" weight="700">
              Inquiries
            </P>
            <Section color="var(--color-foreground)" gap="0.3em">
              <P color="inherit" weight="400">
                +62 811-569-992
              </P>
              <P color="inherit" weight="400">
                nettacodeindonesia@gmail.com
              </P>
            </Section>
          </Section>
        </Section>
        <Section gap="3.1em" maxWidth="18.7em" overflow="visible">
          <Section gap="0.6em" color="var(--color-foreground)" overflow="visible">
            <P color="inherit" weight="700">
              Newsletter
            </P>
            <Section color="var(--color-foreground)" gap="0.3em">
              <P color="inherit" weight="400">
                Stay Updated with our Latest News
              </P>
            </Section>
            <Section gap="0.3em" overflow="visible" alignItems="flex-end">
              <Input labeled={false} bcolor="var(--color-secondary)" scolor="var(--color-foreground)" type="email" label="Email" name="email" placeholder="Your Email" radius="full" />
              <PrimButton icon={<Send />}>Subscribe</PrimButton>
            </Section>
          </Section>
          <Section gap="0.6em" color="var(--color-foreground)">
            <P color="inherit" weight="700">
              Follow Us
            </P>
            <Section color="var(--color-foreground)" direction="row" gap="0.6em" alignItems="center">
              <Img src="/svg/social/fb.svg" style={{ height: "1.5em", width: "auto" }} alt="Facebook" />
              <Img src="/svg/social/twitter.svg" style={{ height: "auto", width: "1.5em" }} alt="Twitter" />
              <Img src="/svg/social/youtube.svg" style={{ height: "auto", width: "1.5em" }} alt="YouTube" />
              <Img src="/svg/social/pin.svg" style={{ height: "1.5em", width: "auto" }} alt="Pinterest" />
              <Img src="/svg/social/linkedin.svg" style={{ height: "1.5em", width: "auto" }} alt="LinkedIn" />
              <Img src="/svg/social/tiktok.svg" style={{ height: "1.5em", width: "auto" }} alt="TikTok" />
              <Img src="/svg/social/instagram.svg" style={{ height: "1.5em", width: "auto" }} alt="Instagram" />
            </Section>
          </Section>
        </Section>
      </Section>
    </Container>
  );
};

export default Footer;
