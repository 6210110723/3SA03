import React from "react";
import "./App.css";
import WordCard from "./WordCard";

const word = "deer";
const word1 = "mouse";
const word2 = "butterfly";
const word3 = "elephant";
const word4 = "chicken";
const word5 = "fish";

const room = "table";
const room1 = "chair";
const room2 = "blackboard";
const room3 = "door";
const room4 = "window";

const fruit = "orange";
const fruit1 = "coconut";
const fruit2 = "pineapple";
const fruit3 = "rambutan";
const fruit4 = "mangosteen";

const newWin = () => {
  window.location.reload();
};

function App() {
  return (
    <div>
      <h1>LOGIC GAMES</h1>

      <center>
        <button className="newWin" onClick={newWin}>
          <h1>Reset Page</h1>
        </button>
      </center>
      
      
      <center class="button"><h2>Animals</h2></center>
      <center>
        <p>Hint: เป็นสัตว์สี่เท้า มีเขาสองเขาแต่ปลายเขามีหกยอด</p>
        <WordCard value={word} />
      </center>

      <center>
        <p>Hint: ขนาดเล็ก มีฟันแทะ อยู่ทั่วไปตามบ้านเรือนและในถิ่นธรรมชาติ</p>
        <WordCard value={word1} />
      </center>
      <center>
        <p>
          Hint: มีวงชีวิตเริ่มแรกตั้งแต่ระยะไข่ ระยะหนอน
          ระยะดักแด้จนเข้าสู่ระยะการโตเต็มวัยที่มีปีกหลากสีต้องตาผู้คน
        </p>
        <WordCard value={word2} />
      </center>
      <center>
        <p>Hint: ตัวใหญ่เท่าฟ้า มีขาสีขา มีงวงและมีงา</p>
        <WordCard value={word3} />
      </center>
      <center>
        <p>Hint: ตอนเช้าตื่นขึ้นขันและปลุกคน มีหางมีหงอน</p>
        <WordCard value={word4} />
      </center>
      <center>
        <p>Hint: สู้คนไม่ได้ ว่ายน้ำทั้งวัน มีครีบมีหาง หายใจทางเหงือก</p>
        <WordCard value={word5} />
      </center>

      <center class="button">Class Room</center>
      <center>
        <p>
          Hint: ใช้สำหรับวางสิ่งของอย่างเช่น อาหาร
          โดยความสูงมีความพอเหมาะสำหรับการนั่ง
        </p>
        <WordCard value={room} />
      </center>
      <center>
        <p>Hint: อุปกรณ์ที่ใช้สำหรับนั้ง</p>
        <WordCard value={room1} />
      </center>
      <center>
        <p>
          Hint: เป็นอุปกรณ์ในการเขียนที่สามารถใช้ซ้ำได้
          โดยสามารถเขียนอักษรหรือวาดภาพได้โดยใช้ชอล์ก หรืออุปกรณ์อื่นๆ
        </p>
        <WordCard value={room2} />
      </center>
      <center>
        <p>
          Hint:
          สิ่งก่อสร้างแบบเคลื่อนที่ได้ใช้ปิดกั้นและเป็นทางเข้าไปยังพื้นที่ที่ถูกปิดไว้เช่น
          อาคาร หรือยานพาหนะ
        </p>
        <WordCard value={room3} />
      </center>
      <center>
        <p>Hint: เป็นช่องเปิดบนผนังหรือ ประตู ที่ยอมให้แสงผ่านได้</p>
        <WordCard value={room4} />
      </center>

      <center class="button">Fruits</center>
      <center>
        <p>Hint: ผลมีรสเปรี้ยวหรือหวาน มักจะมีแคลเซียมหรือวิตามิน</p>
        <WordCard value={fruit} />
      </center>
      <center>
        <p>Hint: เมื่อผลแก่สามารถนำไปทำนำกระทิได้</p>
        <WordCard value={fruit1} />
      </center>
      <center>
        <p>Hint: เป็นผลไม้ที่มีตาหลายตาอยู่บนเปลือก</p>
        <WordCard value={fruit2} />
      </center>
      <center>
        <p>Hint: เป็นผลไม้ทีมีขนอยู่รอบเปลือก</p>
        <WordCard value={fruit3} />
      </center>
      <center>
        <p>
          Hint: มีเปลือกนอกที่ค่อนข้างแข็งสีม่วง
          มีกลีบเลี้ยงเป็นสีเขียวอมเหลืองติดบนผล
        </p>
        <WordCard value={fruit4} />
      </center>

      <h2 class="h2">
        Create by Fadia Wanglim <br />
        ID: 6210110723<br />
        LAB3SA03 Section03
      </h2>
    </div>
  );
}

export default App;
