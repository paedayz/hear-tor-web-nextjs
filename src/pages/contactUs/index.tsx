import { useState } from "react";
import styled from "styled-components";
import { device } from "@/common/constant";
import Line from "@/images/Line.png";
import Facebook from "@/images/facebook.png";
import Instagram from "@/images/instagram.png";
import Youtube from "@/images/Youtube.png";
import Tiktok from "@/images/tiktok.png";
import FloatingIcon from "@/components/FloatingIcon";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200px;
  width: 50%;
  @media ${device.lg} {
    width: 100%;
  }
`;

const PhoneContainer = styled.div``;
const SocialMediaContainer = styled.div`
  margin-top: 10px;
  background-color: #e2f8f7;
  width: 100%;
  height: 360px;
  border-radius: 15px;
`;

const LineIcon = styled.button`
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50px;
  background-image: url(${Line});
  margin-left: 30px;
  margin-top: 10px;
  margin-right: 15px;
  border: none;
`;
const FacebbokIcon = styled.button`
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50px;
  background-image: url(${Facebook});
  margin-left: 30px;
  margin-top: 10px;
  margin-right: 15px;
  border: none;
`;
const InstagramIcon = styled.button`
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50px;
  background-image: url(${Instagram});
  margin-left: 30px;
  margin-top: 10px;
  margin-right: 15px;
  border: none;
`;
const YoutubeIcon = styled.button`
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50px;
  background-image: url(${Youtube});
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 10px;
  margin-right: 15px;
  border: none;
`;
const TiktokIcon = styled.button`
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 50px;
  background-image: url(${Tiktok});
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 10px;
  margin-right: 15px;
  border: none;
`;

const SocialMedia = styled.span`
  font-size: 18px;
  :hover {
    color: #58ff95;
  }
`

type Props = {};

interface ITelphoneData {
  name: string;
  number: string;
  imageURL: string;
}

function ContactUsPage(props: Props) {
  const [telphoneData, setTelphoneData] = useState<ITelphoneData[]>([
    {
      name: "น้องตรุษจีน",
      number: "0963615936",
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/%E0%B8%A3%E0%B8%B9%E0%B8%9B%20600.800.jpeg?alt=media&token=34f6d06f-0059-4b85-9cf6-15dff1c2fcc1',
    },
    {
      name: "เฮียเป็ด",
      number: "0884838011 ",
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/F994C37F-B47F-40F7-89FB-3E6EC044E5B7.jpeg?alt=media',
    },
  ]);

  const renderTelphoneData = telphoneData.map((item) => {
    return (
      <div style={{display: 'block', textAlign: 'center', marginRight: '80px'}}>
        <img style={{height: '100px'}} src={item.imageURL} />
        <div>{item.name}</div>
        <div>{item.number}</div>
      </div>
    );
  });

  return (
    <Container>
      <div style={{ marginBottom: "40px" }}>
        รถยนต์มือสองเมืองเลย เฮีย ต. รวมรถ
        <br />
        รับซื้อ-ขาย แลกเปลี่ยนรถมือสองราคาถูก คุณภาพดี
        <br />
        ของแท้ ของจริง อยู่คู่กับชาวเมืองเลยมามากกว่า 15 ปี
        <br />
        เต็นท์คนเมืองเลย เพื่อคนเมืองเลย อุดหนุนคนเมืองเลย เพื่อสังคมชาวเลย
        <br />
        #เรื่องรถมาที่ตอจบที่เดียว
        <br />
        👉เครดิตดีฟรีดาวน์
        <br />
        👉ขับรถไม่เป็นแถมคอร์สเรียนขับรถพร้อมใบขับขี่
        <br />
        👉ดันทุกอาชีพ ดูแลโดย ทีมงาน มืออาชีพ
        <br />
        👉เตรียมเอกสารง่ายไม่ยุ่งยาก
        <br />
        👉มีรถจอดให้ดูที่หน้าร้านทุกคัน จอดจริง ขายตัวจริงไม่มีสแตนอิน
        <br />
        👉บริการเซ็นเอกสารทั่วไทย ไม่มีค่าใช้จ่ายเพิ่มเติม
        <br />
        👉มีบริการหลังการขาย
        <br />
        👉สามารถทดลองขับรถได้ทุกคัน
        <br />
        👉มีค่านายหน้าสำหรับผู้แนะนำ
        <br />
      </div>
      <PhoneContainer>
        <div
          style={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold" }}
        >
          เบอร์โทรศัพท์
        </div>
        <div style={{display: 'flex'}}>{renderTelphoneData}</div>
      </PhoneContainer>
      <div style={{marginTop: '50px', fontSize: "20px", fontWeight: "bold" }}>โซเชียลมีเดีย</div>
      <SocialMediaContainer>
        <div
          style={{
            fontSize: "20px",
            paddingLeft: "30px",
            paddingTop: "5px",
            fontWeight: "bold",
          }}
        ></div>
        <div onClick={() => window.open("https://www.facebook.com/Heartor.Car2", '_blank')?.focus()} style={{cursor: 'pointer', display: "flex", alignItems: "center" }}>
          <FacebbokIcon />
          <SocialMedia>รถมือสองเมืองเลย เฮีย ต.รวมรถ</SocialMedia>
        </div>
        <div onClick={() => window.open("https://line.me/R/ti/p/@600vdtpx", '_blank')?.focus()} style={{cursor: 'pointer', display: "flex", alignItems: "center" }}>
          <LineIcon />
          <SocialMedia>รถมือสอง เฮีย ต.</SocialMedia>
        </div>
        <div onClick={() => window.open("https://www.instagram.com/heartor_loei_car2", '_blank')?.focus()} style={{cursor: 'pointer', display: "flex", alignItems: "center" }}>
          <InstagramIcon />
          <SocialMedia>heartor_loei_car2</SocialMedia>
        </div>
        <div onClick={() => window.open("https://www.youtube.com/channel/UC57EZSz3U8DYLqR3HRsD87Q", '_blank')?.focus()} style={{cursor: 'pointer', display: "flex", alignItems: "center" }}>
          <YoutubeIcon />
          <SocialMedia>รถมือสองเมืองเลย เฮีย ต.รวมรถ </SocialMedia>
        </div>
        <div onClick={() => window.open("https://www.tiktok.com/@heartor", '_blank')?.focus()} style={{cursor: 'pointer', display: "flex", alignItems: "center" }}>
          <TiktokIcon />
          <SocialMedia>heartor รถมือสองเมืองเลย เฮีย ต. รวมรถ </SocialMedia>
        </div>
      </SocialMediaContainer>
      <FloatingIcon/>
    </Container>
  );
}

export default ContactUsPage;
