import { Faker, fa, base } from "@faker-js/faker";
import { useEffect, useState } from "react";
const faker = new Faker({
  locale: [base, fa],
});

const TypeSpeed = () => {
  const [text] = useState(faker.lorem.paragraph());
  const [type, setType] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const onTypeChange = (e) => {
    if (e.target.value.length == 1) {
      setStart(new Date().getTime());
    }
    setType(e.target.value);
  };

  const endTypeTime = (e) => {
    e.preventDefault();
    setEnd(new Date().getTime());
  };

  const onShowResult = () => {
    setShowResult(true);
  };

  const typingStats = () => {
    if (!start || !end) return null;
    const timeInMinutes = (end - start) / 60000;
    const wordCount = type.trim().split(/\s+/).filter(word => word.length > 0).length;
    const wordPerMin = Math.round(wordCount / timeInMinutes);

    let level = ""
    if (wordPerMin < 20) {
      level = "شما در تایپ مبتدی هستید";
    } else if (wordPerMin >= 20 && wordPerMin < 40) {
      level = "شما در تایپ متوسط هستید";
    } else if (wordPerMin >= 40 && wordPerMin < 60) {
      level = "شما در تایپ سرعتی خوبی دارید";
    } else if (wordPerMin >= 60 ) {
      level = " شما در تایپ استاد هستید ";
    } 
    return {
      wordPerMin,
      level,
      wordCount,
    };
  }

  const renderResult = () => {
    if (!showResult) return null;
    const stats = typingStats();

    if (type !== text) {
      return <span className="erorr">شما متن را به درستی تایپ نکرده اید</span>;
    } else {
      return (
        <div>
          <strong className="success">
            شما متن را بصورت کامل و به درستی تایپ کرده اید
          </strong>
        
            { (
            <div >
                  <p>تعداد کلمات تایپ شده: {stats.wordCount}</p>
                  <p>سرعت تایپ (WPM):{stats.wpm} </p>    
              <div >
                  <p >
                    سطح شما: {stats.level}
                  </p>
  
              </div>
              
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <>
      <div>{text}</div>
      <hr />
      <div>
        <p>
          متن بابا را در کادر بنویسد و پس از پایان دکمه <b>stop</b>  را بزنید
        </p>
        <textarea
          value={type}
          onChange={onTypeChange}
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <div>
        <button className="btn" onClick={endTypeTime}>
          Stop
        </button>

        <button className="btn" onClick={onShowResult}>
          نمایش نتیجه تایپ
        </button>
      </div>

      <hr />

      <div>{renderResult()}</div>
    </>
  );
};

export default TypeSpeed;
