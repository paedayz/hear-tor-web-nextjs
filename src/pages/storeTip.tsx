import styled from "styled-components";

// Component
import { RightOutlined } from "@ant-design/icons";
import { IReviewPage } from "@/pages/review/interfaces";
import { useState } from "react";
import ReviewCard from "@/pages/review/ReviewCard";

const Container = styled.div`
  margin-top: 70px;
  margin-bottom: 200px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
`;

const RightArrow = styled(RightOutlined)`
  margin-left: 10px;
`;

type Props = {};

const StoreTip = (props: Props) => {
  const [tipData, setTipData] = useState<IReviewPage[]>([
    
    {
      linkURL:
        "https://www.facebook.com/watch/?v=450533230084235",
      title: "🧐 ทำไมต้อง 4X4 ?",
      description:
        "เคยสงสัยไหม ว่าทำไมท้ายรถถึงต้องมี 4X4 ติดอยู่ มันหมายความว่ายังไง คลิปนี้มีคำตอบ",
    },
    {
      linkURL:
        "https://www.facebook.com/watch/?v=328956008539282",
      title: "🧐 เสียงเครื่องยนต์ดังอิ๊ด ๆ !!",
      description:
        "เสียงเครื่องยนต์ดังอิ๊ด ๆ มันคือเสียงอะไรกัน ถ้าอยากรู้ไปดูกัน",
    },
    {
      linkURL:
        "https://www.facebook.com/watch/?v=4048153928550689",
      title: "ทำไมไฟเตือนรูปแบตเตอรี่โชว์ขึ้นมา",
      description:
        "ไฟเตือนรูปแบตเตอรี่โชว์ขึ้นมา นอกจากแบตเตอรี่มีปัญหา ยังเกิดจากสาเหตุอะไรได้อีกบ้าง ไปดูกัน 😃",
    },
    {
      linkURL:
        "https://www.facebook.com/watch/?v=868234663865405",
      title: "ทำไมก่อนออกรถต้องเหยียบมะนาว ?",
      description:
        "เวลาเราไปออกรถใหม่ เห็นคนก่อนหน้าก่อนจะเอารถออกไปขับ ต้องขับรถเหยียบมะนาว ก็งงว่าทำไมต้องเหยียบมะนาว ถ้าอยากรู้ คลิปนี้มีคำตอบ !",
    },
    {
      linkURL:
        "https://www.facebook.com/watch/?v=463366481985120",
      title: "🧐 ซูซูกิสวีฟ ประหยัดน้ำมันจริงมั้ย",
      description:
        "เหตุเกิดเมื่ออยากรู้ว่าสวีฟประหยัดน้ำมันจริงไหม??? เลยจัดทริป1วัน พาเพื่อนสาวไปเที่ยวเชียงคาน💖 พอกลับบ้านพี่ตรุษจีนถึงกับถามว่า ได้เติมน้ำมันเพิ่มป่าวเนี้ย🤣 ประหยัดน้ำมันมาก ขับไปกลับ เลย-เชียงคาน ลดไปเพียง 1 ขีดเท่านั้น ขับลื่น แอร์เย็น คุ้มมากกก👍🏻👍🏻👍🏻",
    },
  ]);
  const title = (
    <Title>
      <div>สาระน่ารู้ </div>
    </Title>
  );

  const renderTip = tipData.map((item) => (
    <div key={Math.random()}>
      <ReviewCard
        description={item.description}
        linkURL={item.linkURL}
        title={item.title}
        key={Math.random()}
      />
    </div>
  ));
  return (
    <Container>
      {title}
      <div>
      
        {renderTip}
      </div>
    </Container>
  );
};

export default StoreTip;
