import Image from "next/image";
import styled from "styled-components";
import { IEcosystemSection } from '../../../@types/generated/contentful'

const EcoSystemSection = styled.section`
  width: 100%;
  background-color: #262140;
  position: relative;
  @media (max-width: 1260px) {
    width: 1260px;
  }
`;

const CoverGradient = styled.div`
  width: 100%;
  height: 40px;
  background-color: #262140;
`;

const BorderUpsideGradient = styled.div`
  position: absolute;
  width: 700px;
  height: 8px;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background: linear-gradient(
    118.61deg,
    #f7a6a4 10.69%,
    #ea70e5 48.23%,
    #8e48f6 84.29%
  );
  filter: blur(16px);
`;

const EcosystemContainer = styled.section`
  width: 100%;

  position: relative;
`;

const VolleyballPosAbsolute = styled.div`
  position: absolute;
  top: -77px;
  right: -10px;
  @media (max-width: 1515px) {
    top: -110px;
    right: 100px;
    transform: rotate(330deg);
  }
`;

const EcosystemTitle = styled.h2`
  color: #fff;
  line-height: 90px;
  font-size: 48px;
  text-align: center;
  @media (max-width: 368px) {
    font-size: 26px;
    line-height: 48px;
  }
`;

const AdvantagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 47px;
`;

const AdvantagesLeft = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const AdvantagesRight = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const BorderAdvantages = styled.div`
  border: 1px solid transparent;
  border-image: linear-gradient(45deg, #f7a6a4, #ea70e5, #8e48f6);
  border-image-slice: 1;
`;

const EcosystemAdvantages = styled.p`
  color: #fff;
  padding: 15px 40px 13px 40px;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 368px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const CoverGradientBottom = styled.div`
  width: 30%;
  height: 50px;
  background-color: #262140;
  margin: 0 auto;
  opacity: 0.99;
`;

const BorderBottomGradient = styled.div`
  position: absolute;
  width: 300px;
  height: 7px;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  background: linear-gradient(
    118.61deg,
    #e5e5e5 10.69%,
    #ea70e5 48.23%,
    #e5e5e5 84.29%
  );
  filter: blur(20px);
`;

const SoccerPosAbsolute = styled.div`
  position: absolute;
  bottom: -50px;
  left: -30px;
`;

interface IEcosystemSectionProps {
  ecosystemSectionItems: IEcosystemSection[]
}

const EcosystemSection: React.FC<IEcosystemSectionProps> = ({ ecosystemSectionItems }) => {

  return (
    <EcoSystemSection>
      <BorderUpsideGradient />
      {
        ecosystemSectionItems.map(el => (
          <EcosystemContainer key={el.sys.id}>
            <CoverGradient />
            <VolleyballPosAbsolute>
              <Image
                src={`https:${el.fields.extraAssetImg2.fields.file.url}`}
                width={el.fields.extraAssetImg2.fields.file.details.image?.width}
                height={el.fields.extraAssetImg2.fields.file.details.image?.height}
                alt="volleybal-player-picture"
              />
            </VolleyballPosAbsolute>
            <EcosystemTitle>{el.fields.ecosystemTitle}</EcosystemTitle>
            <AdvantagesContainer>
              <AdvantagesLeft>
                <BorderAdvantages>
                  <EcosystemAdvantages>{el.fields.textAdvantegeContent1}</EcosystemAdvantages>
                </BorderAdvantages>
                <BorderAdvantages>
                  <EcosystemAdvantages>{el.fields.textAdvantegeContent2}</EcosystemAdvantages>
                </BorderAdvantages>
                <BorderAdvantages>
                  <EcosystemAdvantages>{el.fields.textAdvantegeContent3}</EcosystemAdvantages>
                </BorderAdvantages>
                <BorderAdvantages>
                  <EcosystemAdvantages>{el.fields.textAdvantegeContent4}</EcosystemAdvantages>
                </BorderAdvantages>
              </AdvantagesLeft>
              <Image
                src={`https:${el.fields.imageBelongToAdvntages.fields.file.url}`}
                width={el.fields.imageBelongToAdvntages.fields.file.details.image?.width}
                height={el.fields.imageBelongToAdvntages.fields.file.details.image?.height}
                alt="logo-herb" />
              <AdvantagesRight>
                <BorderAdvantages>
                  <EcosystemAdvantages>
                    {el.fields.textAdvantegeContent5}
                  </EcosystemAdvantages>
                </BorderAdvantages>
                <BorderAdvantages>
                  <EcosystemAdvantages>{el.fields.textAdvantegeContent6}</EcosystemAdvantages>
                </BorderAdvantages>
                <BorderAdvantages>
                  <EcosystemAdvantages>{el.fields.textAdvantegeContent7}</EcosystemAdvantages>
                </BorderAdvantages>
                <BorderAdvantages>
                  <EcosystemAdvantages>{el.fields.textAdvantegeContent8}</EcosystemAdvantages>
                </BorderAdvantages>
              </AdvantagesRight>
            </AdvantagesContainer>
            <SoccerPosAbsolute>
              <Image
                src={`https:${el.fields.extraAssetImg1.fields.file.url}`}
                width={el.fields.extraAssetImg1.fields.file.details.image?.width}
                height={el.fields.extraAssetImg1.fields.file.details.image?.height}
                alt="football-player-picture"
              />
            </SoccerPosAbsolute>
          </EcosystemContainer>
        ))
      }
      <BorderBottomGradient />
      <CoverGradientBottom />
    </EcoSystemSection>
  )
}

export default EcosystemSection