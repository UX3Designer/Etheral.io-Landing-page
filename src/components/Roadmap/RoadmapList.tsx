import styled from "@emotion/styled";
import { rgba } from "polished";
import React from "react";
import { TRoadmapItem } from "../../pages/Roadmap";

interface RoadmapListProps {
  roadmapItems: TRoadmapItem[];
}

const StyledRoadmapList = styled.div`
  padding-bottom: 48px;
  @media screen and (min-width: 786px) {
    padding-left: 40px;
    padding-bottom: 490px;
  }

  .roadmap-item {
    background-color: ${(props) =>
      rgba(props.theme.background.secondary, 0.05)};
    padding: 16px;
    margin-bottom: 48px;

    &:last-child {
      margin-bottom: 0;
    }

    .item-title {
      font-size: 18px;
      line-height: 22px;
    }
    .item-body {
      font-size: 16px;
      line-height: 22px;
    }

    .icon-container {
      width: 32px;
      height: 32px;
      left: 50%;
      transform: translateX(-50%);
      top: -19px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.background.tertiary};

      svg {
        width: 14px;
      }

      .svg-fill {
        fill: ${(props) => props.theme.background.primary};
      }
    }

    @media screen and (min-width: 786px) {
      padding: 24px 48px;

      .icon-container {
        width: 56px;
        height: 56px;
        left: -28px;
        top: 50%;
        transform: translateY(-50%);
        svg {
          width: 24px;
        }
      }
    }
  }
`;

const RoadmapList: React.FC<RoadmapListProps> = ({ roadmapItems }) => {
  return (
    <StyledRoadmapList>
      {roadmapItems.map((item, index) => (
        <div key={index} className="roadmap-item position-relative">
          <div className="icon-container position-absolute d-flex justify-content-center align-items-center">
            <item.Icon />
          </div>
          <h4 className="item-title fw-bold">{item.title}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </StyledRoadmapList>
  );
};

export default RoadmapList;
