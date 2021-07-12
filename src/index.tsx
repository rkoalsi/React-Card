import React from 'react';
import styled from 'styled-components';
interface StyledCardProps {
  background?: string;
  height?: number;
  width?: number;
  title?: string;
  titleColor?: string;
  subtitleColor?: string;
  subtitle?: string;
  pricetitle?: string;
  bgPhoto?: string;
  totalViews?: number;
  onClickCard?: () => {};
}

const Container = styled.div`
  position: relative;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(0, 0, 0, 0.8) 80%
    ),
    url(${(props: StyledCardProps) => props.background});
  background-position: center center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
  word-wrap: break-word;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ContentColumn = styled.div``;

const Title = styled.span`
  font-size: 24px;
  font-weight: 900;
  display: block;
  margin-bottom: 8px;
  color: ${(props: any) => props.color};
`;

const Subtitle = styled.span`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(props: any) => props.color};
`;
const PriceTitle = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(props: any) => props.color};
`;
const ReviewsContainer = styled.div`
  margin-top: 15px;
  font-size: 10px;
  color: rgba(255, 255, 255, 50);
  & span:last-child {
    margin-left: 5px;
  }
`;
const StyledCard: React.FC<StyledCardProps> = ({
  title = '',
  titleColor = 'white',
  subtitleColor = 'white',
  subtitle = '',
  pricetitle = '',
  bgPhoto = '',
  totalViews = 0,
  onClickCard = () => {},
  height = '',
  width = '',
}) => (
  <Container
    background={bgPhoto}
    onClick={onClickCard}
    style={{ height, width }}
  >
    <Content>
      <ContentColumn>
        {(title || subtitle || pricetitle) && (
          <>
            <Title color={titleColor}>{title}</Title>
            <Subtitle color={subtitleColor}>{subtitle}</Subtitle>
            <PriceTitle color={subtitleColor}>{pricetitle}</PriceTitle>
          </>
        )}
        <ReviewsContainer>
          {totalViews && (
            <span>
              {`${totalViews === 1 ? '1 view' : `${totalViews} views`}`}
            </span>
          )}
        </ReviewsContainer>
      </ContentColumn>
    </Content>
  </Container>
);
export default StyledCard;
