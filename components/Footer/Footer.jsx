/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Link as MUILink } from '@mui/material';
import { styled } from '@mui/material/styles';
import useFooter from 'components/Footer/useFooter';

const Property1Desktop = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundColor: `rgba(23, 23, 23, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height:
    data.currentVariant === 'Property1tablet'
      ? `412px`
      : data.currentVariant === 'Property1mobile'
      ? `739px`
      : `391px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems:
    data.currentVariant === 'Property1tablet'
      ? `flex-start`
      : data.currentVariant === 'Property1mobile'
      ? `flex-start`
      : `center`,
  padding: `0px`,
  boxSizing: `border-box`,
}));

const FooterContent = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `0px`
      : data.currentVariant === 'Property1mobile'
      ? `40px 0px 0px 0px`
      : `30px 180px 0px 180px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: data.currentVariant === 'Property1tablet' ? 'unset' : `1`,
  margin: `0px`,
  height: data.currentVariant === 'Property1tablet' ? `358px` : 'unset',
}));

const FooterCentered = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'Property1mobile' ? `column` : `row`,
  justifyContent:
    data.currentVariant === 'Property1mobile' ? `flex-start` : `space-between`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `50px 50px 0px 50px`
      : data.currentVariant === 'Property1mobile'
      ? `0px`
      : `0px 50px`,
  boxSizing: `border-box`,
  alignSelf: data.currentVariant === 'Property1mobile' ? 'unset' : `stretch`,
  margin: `0px`,
}));

const QuestLogoFooter = styled('img', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  height: `32px`,
  width: `110px`,
  margin: data.currentVariant === 'Property1mobile' ? `0px` : 'unset',
}));

const Column1 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile' ? `38px 0px 0px 0px` : 'unset',
}));

const Links1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Product = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const BuildReact = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const BuildHtml = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Plugin = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Docs = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Column2 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'Property1mobile' ? `row` : `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile' ? `38px 0px 0px 0px` : 'unset',
}));

const Link2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
});

const Social = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const Facebook = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Twitter = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Medium = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Instagram = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Link3 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 66px`
      : `28px 0px 0px 0px`,
  overflow: `hidden`,
}));

const Company = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const Jobs = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Contact = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Column3 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'Property1mobile' ? `row` : `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile' ? `38px 0px 0px 0px` : 'unset',
}));

const Link4 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Community = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width:
    data.currentVariant === 'Property1tablet'
      ? 'unset'
      : data.currentVariant === 'Property1mobile'
      ? 'unset'
      : `119px`,
  margin: `0px`,
}));

const Discord = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Links5 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 54px`
      : `28px 0px 0px 0px`,
  overflow: `hidden`,
}));

const Terms = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const PrivacyPolicy = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const TermsOfService = styled(MUILink)({
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const MadeWith = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `54px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Line = styled('div')({
  backgroundColor: `rgba(112, 112, 112, 1)`,
  border: `1px solid rgba(80, 80, 80, 1)`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `1px`,
  margin: `0px`,
});

const Group6 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `15px 0px 0px 0px`,
  overflow: `hidden`,
});

const FooterSaying = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent:
    data.currentVariant === 'Property1tablet'
      ? `center`
      : data.currentVariant === 'Property1mobile'
      ? `center`
      : `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
}));

const ThisSiteWasProudl = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame125 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 3px`
      : `0px 0px 0px 5px`,
}));

const FooterFigma1 = styled('img', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  height:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  width:
    data.currentVariant === 'Property1tablet'
      ? `10.35px`
      : data.currentVariant === 'Property1mobile'
      ? `8.28px`
      : `11.04px`,
  objectFit: `cover`,
  margin: `0px`,
}));

const ThisSiteWasProudl1 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 4px`
      : `0px 0px 0px 6px`,
}));

const Frame126 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 3px`
      : `0px 0px 0px 5px`,
}));

const FooterQ1 = styled('img', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  height:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  width:
    data.currentVariant === 'Property1tablet'
      ? `14.87px`
      : data.currentVariant === 'Property1mobile'
      ? `11.9px`
      : `15.87px`,
  objectFit: `cover`,
  margin: `0px`,
}));

const ThisSiteWasProudl2 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 4px`
      : `0px 0px 0px 6px`,
}));

const Frame127 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 3px`
      : `0px 0px 0px 5px`,
}));

const Vector = styled('img', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  height:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  width:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  margin: `0px`,
}));

const ThisSiteWasProudl3 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI Historic`,
  fontWeight: `400`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin:
    data.currentVariant === 'Property1tablet'
      ? `0px 0px 0px 6px`
      : data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 4px`
      : `0px 0px 0px 5px`,
}));

function Footer(props) {
  const { data } = useFooter();

  return (
    <Property1Desktop className={props.className} data={data}>
      <FooterContent data={data}>
        <FooterCentered data={data}>
          <QuestLogoFooter
            data={data}
            src={`assets/images/footer_quest_logo_footer.png`}
            loading="lazy"
            alt={'quest logo footer'}
          />
          <Column1 data={data}>
            <Links1>
              <Product>{`Product`}</Product>
              <BuildReact href="#" underline="hover">
                Build React components
              </BuildReact>
              <BuildHtml href="#" underline="hover">
                Build Websites
              </BuildHtml>
              <Plugin href="#" underline="hover">
                Plugin for Figma
              </Plugin>
              <Docs href="#" underline="hover">
                Docs
              </Docs>
            </Links1>
          </Column1>
          <Column2 data={data}>
            <Link2>
              <Social>{`Social`}</Social>
              <Facebook href="#" underline="hover">
                Facebook
              </Facebook>
              <Twitter href="#" underline="hover">
                Twitter
              </Twitter>
              <Medium href="#" underline="hover">
                Medium
              </Medium>
              <Instagram href="#" underline="hover">
                Instagram
              </Instagram>
            </Link2>
            <Link3 data={data}>
              <Company>{`Company`}</Company>
              <Jobs href="#" underline="hover">
                Jobs
              </Jobs>
              <Contact href="#" underline="hover">
                Contact Us
              </Contact>
            </Link3>
          </Column2>
          <Column3 data={data}>
            <Link4>
              <Community data={data}>{`Community`}</Community>
              <Discord href="#" underline="hover">
                Discord
              </Discord>
            </Link4>
            <Links5 data={data}>
              <Terms>{`Terms`}</Terms>
              <PrivacyPolicy href="#" underline="hover">
                Privacy Policy
              </PrivacyPolicy>
              <TermsOfService href="#" underline="hover">
                Terms of Service
              </TermsOfService>
            </Links5>
          </Column3>
        </FooterCentered>
      </FooterContent>
      <MadeWith>
        <Line></Line>
        <Group6>
          <FooterSaying data={data}>
            <ThisSiteWasProudl data={data}>
              {`Site designed in `}
            </ThisSiteWasProudl>
            <Frame125 data={data}>
              <FooterFigma1
                data={data}
                src={`assets/images/footer_footer_figma_1.png`}
                loading="lazy"
                alt={'footer_figma 1'}
              />
              <ThisSiteWasProudl1 data={data}>
                {data.currentVariant === 'Property1mobile'
                  ? `Figma,  built with`
                  : `Figma, built with`}
              </ThisSiteWasProudl1>
            </Frame125>
            <Frame126 data={data}>
              <FooterQ1
                data={data}
                src={`assets/images/footer_footer_q_1.png`}
                loading="lazy"
                alt={'footer_q 1'}
              />
              <ThisSiteWasProudl2 data={data}>
                {data.currentVariant === 'Property1mobile'
                  ? `Quest,  deployed with `
                  : `Quest, deployed with `}
              </ThisSiteWasProudl2>
            </Frame126>
            <Frame127 data={data}>
              <Vector
                data={data}
                src={`assets/images/footer_Vector.png`}
                loading="lazy"
                alt={'Vector'}
              />
              <ThisSiteWasProudl3 data={data}>{`NextJS`}</ThisSiteWasProudl3>
            </Frame127>
          </FooterSaying>
        </Group6>
      </MadeWith>
    </Property1Desktop>
  );
}

export default Footer;
