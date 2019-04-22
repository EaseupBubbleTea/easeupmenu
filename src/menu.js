const menu = [
  {
    name: { eng: 'Signature', th: 'ชานมไข่มุกต้นตำหรับ' },
    number: 1,
    desc: {
      eng: ``,
      th: `เพราะรสชาติและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา
  จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน
  นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp
  จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`
    },
    prices: { small: 40, large: 50 },
    detailCss: ['item-detail', 'item-detail__signature'],
    srcUrls: {
      small: 'https://i.imgur.com/rfKoGBn.jpg',
      large: 'https://i.imgur.com/dmG3Vrf.jpg'
    },
    topping: [
      { bubble: 5 },
      { Konjac: 10 },
      { 'Aloe Vera': 10 },
      { Popping: 10 }
    ]
  },
  {
    name: { eng: 'Fresh YuZu', th: 'เฟรชยูสุ' },
    number: 2,
    desc: {
      eng: ``,
      th: `
    เพื่อจะได้เครื่องดื่มที่มอบความสดชื่นทันทีในดื่มแรก ของเดือนเมษายน
    ทางร้านจึงเลือก ผลไม้ที่ตอบโจทย์ จนไปพบกับความเป็นเอกลักษณ์ของส้มยูสุ
    ด้วยความหอมอโรม่าของส้ม บวกกับบับเบิ้ลสอดไส้น้ำลิ้นจี่
    จึงเป็นอีกแก้วที่พร้อมรับมือกับสงกรานต์ได้เป็นอย่างดี`
    },
    prices: { small: 65, large: 75 },
    detailCss: ['item-detail', 'item-detail__freshYuZu'],
    srcUrls: {
      small: 'https://i.imgur.com/yqq2gz3.jpg',
      large: 'https://i.imgur.com/0fCD7AS.jpg'
    },
    topping: [{ Popping: 10 }]
  },
  {
    name: { eng: 'Oolong iced tea', th: 'บาร์เล่อู่หลง' },
    number: 3,
    desc: {
      eng: ``,
      th: `ชาอู่หลง หรือ ชามังกรดำในภาษาจีน เป็นชากึ่งหมัก
    ผ่านกระบวนการนวดเล็กน้อย ใช้เวลาไม่มากนัก มีกลิ่นหอม รสชาดชุ่มคอ
    น้ำชามีสาร tannin ช่วยสลายไขมันในลำไส้ใหญ่ ช่วยทำให้สดชื่น
    กระตุ้นการทำงานของระบบประสาทและหมุนเวียนโลหิต.
    EaseUp คัดสรรใบชาคุณภาพจากไต้หวัน เพื่อสัมผัสแห่งอู่หลงที่แท้จริง`
    },
    prices: { small: 50, large: 60 },
    detailCss: ['item-detail', 'item-detail__oolong'],
    srcUrls: {
      small: 'https://i.imgur.com/rGmv4YW.jpg',
      large: 'https://i.imgur.com/EZDWjT1.jpg'
    },
    topping: [{ bubble: 5 }, { Konjac: 10 }, { 'Aloe Vera': 10 }]
  },
  {
    name: { eng: 'Iced Matcha Latte', th: 'มัทฉะลาเต้' },
    number: 4,
    desc: {
      eng: ``,
      th: `มัทฉะที่ดี จะมีความขมฝาดน้อย แต่จะคงความเข้มข้นและหอมสดชื่นของชาเขียวแท้สไตล์ญี่ปุ่น.`
    },
    prices: { small: 50, large: 65 },
    detailCss: ['item-detail', 'item-detail__matchaLatte'],
    srcUrls: {
      small: 'https://i.imgur.com/SJ6puYd.jpg',
      large: 'https://i.imgur.com/FPvfP4o.jpg'
    },
    topping: [{ bubble: 5 }]
  },
  {
    name: { eng: 'Kuromitsu Milk Tea', th: 'คุโร่มิทสึ' },
    number: 5,
    desc: {
      eng: ``,
      th: `หรือ น้ำผึ้งดำ ทำมาจากน้ำตาลอ้อยแห่งเกาะโอกินาว่า ญี่ปุ่น โดยการเคี่ยวน้ำตาลกับน้ำจนงวด`
    },
    prices: { small: 55, large: 65 },
    detailCss: ['item-detail', 'item-detail__kuromitsu'],
    srcUrls: {
      small: 'https://i.imgur.com/qE7q199.jpg',
      large: 'https://i.imgur.com/lQjISoJ.jpg'
    },
    topping: [{ bubble: 5 }]
  },
  {
    name: { eng: 'Elegance Matcha', th: 'เอลลิแกรนซ์มัทฉะ' },
    number: 6,
    desc: {
      eng: ``,
      th: `มัทฉะแท้ ตีกับนมโคสดด้วยมือแบบแก้วต่อแก้วสุดเข้มข้น ราดลงไปบนนมโคสดอย่างดี.`
    },
    prices: { large: 90 },
    detailCss: ['item-detail', 'item-detail__elegantMatcha'],
    srcUrls: {
      small: 'https://i.imgur.com/vC9uvQh.jpg',
      large: 'https://i.imgur.com/qeiKnOE.jpg'
    }
  },
  {
    name: { eng: 'Dark Choco Milk Tea', th: 'ดาร์กช็อคโก้' },
    number: 7,
    desc: {
      eng: ``,
      th: `สัมผัสกับความเข้มข้นเต็มรูปแบบกับ กับช็อคโกแลตแท้ถึง 3 ชนิด`
    },
    prices: { small: 55, large: 65 },
    detailCss: ['item-detail', 'item-detail__darkChoco'],
    srcUrls: {
      small: 'https://i.imgur.com/7WVnAO7.jpg',
      large: 'https://i.imgur.com/CTfunGA.jpg'
    },
    topping: [{ bubble: 5 }]
  },
  {
    name: { eng: 'Peach Light', th: 'พีชไลท์' },
    number: 8,
    desc: {
      eng: ``,
      th: `(ไม่มีคาเฟอีน) ลูกพีชคุณประโยชน์มากมาย มีทั้งวิตามินเอที่ช่วยบำรุงสายตา
     มีวิตามินซีป้องกันโรคหวัด และโรคเลือดออกตามไรฟัน
     ให้แร่ธาตุแคลเซียมและฟอสฟอรัสช่วยเสริมสร้างกระดูกและฟัน
     ทั้งยังแก้โรคหอบหืด หล่อลื่นลำไส้`
    },
    prices: { small: 55, large: 65 },
    detailCss: ['item-detail', 'item-detail__peachTea'],
    srcUrls: {
      small: 'https://i.imgur.com/FTfkb4P.jpg',
      large: 'https://i.imgur.com/D9ECI5C.jpg'
    },
    topping: [{ Konjac: 10 }, { 'Aloe Vera': 10 }]
  },
  {
    name: { eng: 'Oolong Peach Tea', th: 'อู่หลงพีชไอซ์ที' },
    number: 9,
    desc: {
      eng: ``,
      th: `ด้วยความหอมของลูกพีช
    บวกกับความหอมสดชื่นของชาอู่หลงก้านอ่อนอบผสมดอกหอมหมื่นลี้จากประเทศไต้หวัน
    ทำให้ความรู้สึกผ่อนคลายเหมือนได้พักผ่อนกลางธรรมชาติ`
    },
    prices: { small: 55, large: 65 },
    detailCss: ['item-detail', 'item-detail__oolongPeace'],
    srcUrls: {
      small: 'https://i.imgur.com/fOsG7xV.jpg',
      large: 'https://i.imgur.com/iNRYrOt.jpg'
    },
    topping: [{ Konjac: 10 }, { 'Aloe Vera': 10 }]
  },
  {
    name: { eng: 'Strawberry Lime Soda', th: 'สตรอว์เบอร์รี ไลม์ โซดา' },
    number: 10,
    desc: {
      eng: ``,
      th: `เนื้อสตรอว์เบอร์รีสด ผสมกับซอสไซรัปสตรอว์เบอร์รีสูตรพิเศษ
    เวลาดื่มได้ความสดชื่นของน้ำและได้สัมผัสถึงเนื้อสตรอว์เบอร์รีแท้ๆ`
    },
    prices: { small: 55, large: 65 },
    detailCss: ['item-detail', 'item-detail__strawberryLimeSoda'],
    srcUrls: {
      small: 'https://i.imgur.com/ruIMyqJ.jpg',
      large: 'https://i.imgur.com/sdNQLzJ.jpg'
    },
    topping: [
      { Popping: 10 }
    ]
  },
  {
    name: { eng: 'Milo Magma', th: 'ไมโลแมกม่า' },
    number: 11,
    desc: {
      eng: ``,
      th: `ซอสช็อคโกแลตบัตเตอร์เข้มข้น  ราดลงบนไมโลหอมๆ เข้ากันอย่างลงตัว สำหรับคนที่คลั่งไคล้ช้อคโกแลต ไม่ควรพลาด`
    },
    prices: { small: 60, large: 70 },
    detailCss: ['item-detail', 'item-detail__miloMagma'],
    srcUrls: {
      small: 'https://i.imgur.com/F0XIA1j.jpg',
      large: 'https://i.imgur.com/M372Zzc.jpg'
    },
    topping: [
      { bubble: 5 }
    ]
  },
  {
    name: { eng: 'Hojicha Latte', th: 'โฮจิฉะ ลาเต้' },
    number: 13,
    desc: {
      eng: ``,
      th: `ใบชาเขียวที่ไม่ใช่สีเขียว นำใบชาไปผ่านการคั่วไฟจนได้กลิ่นหอมอันเป็นเอกลักษณ์ และการคั่วไฟทำให้รสชาติชาไม่ฝาดไม่ขมอย่างชาเขียวชนิดอื่นๆ อีกทั้งโฮจิฉะยังมีปริมาณคาเฟอีนน้อยกว่าด้วย สีสันของชาเขียวโฮจิฉะจะออกสีน้ำตาลอ่อนๆ รสชาติอ่อน ดื่มง่าย `
    },
    prices: { small: 50, large: 60 },
    detailCss: ['item-detail'],
    srcUrls: {
      small: 'https://i.imgur.com/f8UEFTZ.jpg',
      large: 'https://i.imgur.com/pi36sx4.jpg'
    },
    topping: [
      { bubble: 5 }
    ]
  },
  {
    name: { eng: 'Purple Sweet Potato Lava', th: 'เพอเพิลสวีทโปเตโต้ลาวา' },
    number: 15,
    desc: {
      eng: ``,
      th: `มันเทศสีม่วง พันธุ์จากเกาะโอกินาว่า ลักษณะพิเศษมีสีม่วงสด มีเซี้ยนน้อย หอมหวานธรรมชาติ นมมาบดละเอียด ทางร้านนำมาทำซอสลาวา เสริฟคู่กับนมสด ราดลงบนนมสดแท้ เวลาดื่ม จะได้สัมผัสถึงเนื้อมันม่วงแท้ๆ`
    },
    prices: { small: 60, large: 70 },
    detailCss: ['item-detail'],
    srcUrls: {
      small: 'https://i.imgur.com/50Cl2YZ.jpg',
      large: 'https://i.imgur.com/hRhQ5AM.jpg'
    },
    topping: [
      { bubble: 5 }
    ]
  },
];

export default menu;
