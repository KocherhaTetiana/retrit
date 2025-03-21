import React, { useEffect } from 'react';
import './App.css'
import { myFunction, initAccordion, initSmoothScroll, ScrollToContactForm  } from "./App.js";
import { CalendarDays, SunMoon, MapPin, MapPinHouse, HeartHandshake, UserPlus, Lightbulb, Heart, Eye, Search, BedDouble, UtensilsCrossed, ClipboardList, Bus } from "lucide-react";


function App() {

  useEffect(() => {
    myFunction();
    initAccordion(); 
    initSmoothScroll();
    ScrollToContactForm();
  }, []);

  return (
    <>
      <section className="banner firstScreen">

          <div className="container">
            <div className="row flex-column">
              <h2>Авторський тур</h2>
              <h1>«ПЕРЕХІД»</h1>
            </div>

            <div className="row infoBlock">
              <div className="infoRow">
                <CalendarDays size={24} color="#C2794D" />
                <p>коли? 4-6 квітня</p>
              </div>

              <div className="infoRow">
                <MapPin size={24} color="#C2794D" />
                <p>де? Буша, Вінницька область</p>
              </div>

            </div>

            <div className="row authorsBlock">
              <div className="author">
                <h2>Тетяна Кісільова</h2>
                <p>Психолог, провідник<br />духовних практик</p>
              </div>

              <div className="author">
                <h2>Кочерга Тетяна</h2>
                <p>Психолог, психотерапевт</p>
              </div>


            </div>


          </div>
 
      </section>


      <section className="underBanner">

          <div className="container">
            <div className="row">

              <div className="infoblock-3-items">
                <div className="infoitem">
                  <SunMoon  size={48} color="#C2794D" />
                  <h3>3 дні / 2 ночі</h3>
                  <p>глибокого занурення в себе та здійснення свого переходу.</p>
                </div>
                <div className="infoitem">
                  <MapPinHouse size={48} color="#C2794D" />
                  <h3>Буша, Вінницька область</h3>
                  <p>місце сили, де народжуються зміни.</p>
                </div>
                <div className="infoitem">
                  <HeartHandshake size={48} color="#C2794D" />
                  <h3>Безпечний простір</h3>
                  <p>відпускання старого та зародження нового.</p>
                </div>
              </div>
            </div>
          </div>
 
      </section>


      <section className="ourRetritsAre">

          <div className="container">
            <div className="row">
              <div className="col-6">
                <p>В житті кожної жінки настає момент, коли потрібно зробити перехід — від уявлень і установок минулого – до реальності та виборів сьогодення.</p>
                <p>Від сценаріїв, у яких мало свободи й повітря, і які вже приросли до шкіри, — до побудови свого власного, життєвого ЖИВОГО шляху.</p>
                <p>Від того, що вже більше не підходить і не хочеться, — до того, що хочеться…</p>
                <p>Від минулого, яке, в той час, було таким знайомим і безтурботним, і яке так не хочеться відпускати, — до зустрічі з реальністю, де і живе справжнє життя.</p>
                <p>Від мрій та фантазій - до реальних виборів та дій.</p>
                <p>Від “хорошої дівчинки” - до себе справжньої.</p>
                <p>Від страху – до бажання.</p>
                <p>Попрощатися із очікуваннями, нездійсненними мріями та фантазіями, не зробленими виборами, колишніми партнерами, старими друзями та вже тісними сукнями…</p>
                <p>Але робити цей крок самій — важко.</p>
                <p>Страшно.</p>
                <p>Іноді боляче.</p>

              </div>
              <div className="col-6">
                <img src={`${import.meta.env.VITE_BASE_URL}/images/IMG_5617.png`} alt="Татьяна Кочерга" />
              </div>
              <div className="col-12">
                <p>
                  І саме в ці моменти важливо не залишатися наодинці зі своїм страхом і невідомістю. Важливо мати простір, де можна бути собою в колі таких же своїх! Наш тур – і може стати тим самим простором для тебе!
                </p>
                
              </div>
              <button className="toContactForm btnStyle2">Забронювати місце</button>
            </div>
          </div>

      </section>

      <section className="retritForYou">

          <div className="container">
            <div className="row flex-column">
              <h2>Цей тур — для тебе</h2>
              <p>якщо ти відчуваєш, що</p>

              <div className="infoblocks-4-items">
                <div className="infoitem">
                  <UserPlus size={48} strokeWidth={1.5} color="#C2794D" />
                  <p><strong>СТОЇШ НА ПОРОЗІ ЗМІН</strong>, але не знаєш, як наважитися і зробити крок вперед.</p>
                </div>
                <div className="infoitem">
                  <Lightbulb size={48} strokeWidth={1.5} color="#C2794D" />
                  <p><strong>ВТОМИЛАСЯ ВІД ПОСТІЙНОГО ПРОЖИВАННЯ СТАРИХ (ЧУЖИХ?) СЦЕНАРІЇВ</strong> і хочеш почати будувати своє життя по-новому – від себе і своїх бажань.</p>
                </div>
                <div className="infoitem">
                  <Heart size={48} strokeWidth={1.5} color="#C2794D" />
                  <p><strong> ВІДЧУВАЄШ НА СОБІ ТЯГАР МИНУЛОГО</strong>, та бачиш, що вже час його відпустити</p>
                </div>
                <div className="infoitem ">
                  <Eye size={48} strokeWidth={1.5} color="#C2794D" />
                  <p>Хочеш зустрітися зі своїми <strong>СПРАВЖНІМИ</strong> бажаннями та потребами.</p>
                </div>
                <div className="infoitem">
                  <Search size={48} strokeWidth={1.5} color="#C2794D" />
                  <p><strong>ЗНАЙТИ ПІДКАЗКИ ТА ОПОРИ</strong> для руху далі!</p>
                </div>
              </div>
            </div>
          </div>
 
      </section>


      <section className="retritForYou">

          <div className="container">
            <div className="row flex-column">
              <h2>На тебе чекають</h2>

              <div className="imageCards-3-items">
                <div className="imageCard">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/IMG_4712.PNG`} alt="Тілесні практики" />
                  <h3>Тілесні практики</h3>
                  <p>що допоможуть знову відчути зв’язок із собою, своїм тілом й почути свої справжні бажання.</p>
                </div>
                <div className="imageCard">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/photo_2025-03-10_21-04-39.jpg`} alt="Творчі процеси" />
                  <h3>Творчі процеси</h3>
                  <p>через які ти зможеш висловити те, що важко сказати словами, і побачити свої приховані ресурси.</p>
                </div>
                <div className="imageCard">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/photo_2025-03-10_21-51-46.jpg`} alt="Глибокі медитації, Цигун та  вібраційні чаші" />
                  <h3>Глибокі медитації, Цигун та  вібраційні чаші</h3>
                  <p>що допоможуть заспокоїти внутрішній шум і створити простір для нового.</p>
                </div>
                <div className="imageCard">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/photo_2025-03-10_21-05-58.jpg`} alt="Психотерапевтичні майстер - класи" />
                  <h3>Психотерапевтичні майстер - класи</h3>
                  <p>де ми будемо проживати страхи, відпускати старе й відкривати двері до нових можливостей.</p>
                </div>
                <div className="imageCard">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/IMG_7642.JPG`} alt="Трансформаційна гра “Ліла”" />
                  <h3>Трансформаційна гра “Ліла”</h3>
                  <p>як відображення твого життєвого шляху.</p>
                </div>
                <div className="imageCard">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/IMG_6957.jpg`} alt="Розслаблпення і відпочинок" />
                  <h3>Розслаблення і відпочинок</h3>
                  <p>знайомство із історичними пам'ятками на енергетикою Буші!</p>
                </div>

              </div>
            </div>
          </div>
 
      </section>


      <section className="banner">

        <div className="container">
          <div className="row flex-column">
            <h3>
              І найважливіше — це підтримка. Поруч будуть жінки, які також стоять на порозі свого переходу. Які також знають, як це — боятися змін, але ще більше — втомитися жити не своїм життям. І поруч будемо і ми, твої провідники, які також знають, як це боятися, стояти на порозі і в той же час робити крок вперед!
            </h3>

            <button className="toContactForm">Забронювати місце</button>

          </div>
        </div>

      </section>


      <section className="retritProgramm">

          <div className="container">
            <div className="row">
              <h2>Програма по днях</h2>

              <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header">ДЕНЬ 1</div>
                    <div className="accordion-content">
                        <p>9:45 – збір у м. Вінниця на зупинці Шевченка, біля ресторації “Карабас”</p>
                        <p>10:00 – виїзд в сторону Буша</p>
                        <p>12:00 – приїзд в Буша, поселення, знайомство із територією, обід</p>
                        <p>13:00/14:00 – перше коло знайомства</p>
                        <p>15:30 – екскурсія по Бушанському заповіднику.</p>
                        <p>17:00 – вечеря, вільний час</p>
                        <p>18:00 – трансформаційна гра “Ліла”</p>
                        <p>21:00 – МАК - практика “Що я тримаю, хоча це вже мені не служить?”</p>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">ДЕНЬ 2</div>
                    <div className="accordion-content">
                        <p>6:00 – зустрічаємо світанок + практика Цигун</p>
                        <p>8:30 – сніданок</p>
                        <p>9:00 – психологічна група “За межами коробки”</p>
                        <p>12:30 – обід</p>
                        <p>13:30 – майстер-клас із гончарства “Створення мого символу переходу”</p>
                        <p>17:00 – вечеря</p>
                        <p>18:00 – продовження “Ліла”/ вечірня група МАК-практик “Що народжується в мені зараз?”</p>
                        <p>21:00 – за бажанням затишний вечір із розмовами під вино</p>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">ДЕНЬ 3</div>
                    <div className="accordion-content">
                        <p>9:00 – сніданок</p>
                        <p>9:30 – практика рухової терапії + техніка медитації “Мій новий шлях”</p>
                        <p>12:00 – виселення, виїзд до місця сили Гайдамацький Яр. Практика завершення</p>
                        <p>16:00 – виїзд в напрямку Вінниці.</p>
                    </div>
                </div>
            </div>

            <h3>Час є орієнтовним (крім часу виїзду із Вінниці), та може змінюватися в залежності від потреб та динаміки групи.</h3>

            </div>
          </div>

      </section>


      <section className="aboutAuthors">

          <div className="container">
            <div className="row flex-column">
              <h2>АВТОРИ ТА ВЕДУЧІ ТУРУ</h2>
              <div className="row">
                <div className="col-6">
                  <p>
                    <b>Кісільова Тетяна</b> – Психолог, провідник духовної трансформаційної гри «Ліла». Практикуюча тілесних та дихальних практик: Циґун з тета медитаціями та вібро звуковими тибетськими чашами. Продовжую свою діяльність як турагент - бронюю яскраві подорожі. Дружина! Мама двох прекрасних дітей!
                  </p>
                </div>
                <div className="col-6">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/TETIANA_KISILIOVA.JPG`} alt="Кісільова Тетяна" />
                </div>
              </div>
              
              <div className="row">
                <div className="col-6">
                  <img src={`${import.meta.env.VITE_BASE_URL}/images/tatiana_kocherga.jpg`} alt="Кочерга Тетяна" />
                </div>
                <div className="col-6">
                  <p>
                    <b>Кочерга Тетяна</b> – психолог, гештальт-терапевт. Досвід індивідуальної та групової роботи із 2017 року. Основні напрямки в роботі – робота із різного роду запитами в темі стосунків, сепарація, кризи, запити з пошуку себе, свого шляху, своєї професійної ідентичності, своїх істинних потреб та бажань, формування дорослої позиції, теми сексуальності та психологія переїдання/зайвої ваги. Крім терапії захоплююсь подорожами, рафтингом, спортом, водінням авто, маю чорну лабрадорку Бусю. В недавньому захоплююсь хайкінгом і в планах на весну 2025 року пройти Лікійською стежкою в Туреччині.
                  </p>
                </div>
              </div>
            </div>
          </div>

      </section>

      
      <section className="aboutPlace">

          <div className="container">
            <div className="row ">
              <h2>МІСЦЕ ПРОВЕДЕННЯ</h2>
              <h3>Вінницька область, Буша — місце сили, де народжуються зміни!</h3>
              <p>Є місця, які мають особливу енергію. Вони ніби відкривають простір для внутрішніх трансформацій і допомагають зробити крок до нового життя. Одне з таких місць — Буша, селище у Вінницькій області, де історія, природа та духовність сплітаються в єдине ціле.
              </p>
              <p>Це територія, наповнена силою і глибиною. Тут збереглися стародавні пам’ятки — скельний храм VIII–IX століть із загадковими барельєфами, старе козацьке кладовище та Гайдамацький яр — каньйон із печерами, що колись були прихистком для сміливців. Кожен куточок цієї землі дихає історією і силою змін.</p>
              <p>Саме тому ми обрали Бушу для нашого ретриту «Перехід» — простору, де можна відпустити старе, щоб відкрити нове!</p>
              <p>У цьому місці легко почути себе. Відпустити те, що вже не служить. Віднайти нові опори і внутрішню свободу.</p>
            </div>
          </div>

      </section>


      <section className="prices">

          <div className="container">
            <div className="row flex-column">
              <h2>Вартість: 8.500 грн</h2>
              <p>включено</p>

              <div className="infoblocks-3-items">
                <div className="infoitem">
                  <BedDouble size={48} color="#C2794D" />
                  <h3>Проживання: <br/>2 ночі/3 дні</h3>
                </div>
                <div className="infoitem">
                  <UtensilsCrossed size={48} color="#C2794D" />
                  <h3>Харчування</h3>
                </div>
                <div className="infoitem">
                  <ClipboardList size={48} color="#C2794D" />
                  <h3>Програма туру</h3>
                </div>
                <div className="infoitem">
                  <Bus size={48} color="#C2794D" />
                  <h3>Переїзд: <br/>Вінниця – Буша – Вінниця</h3>
                </div>
               
              </div>
              <p>Не включено: особисті витрати. </p>
            </div>
            
            <div className="row">
                <p>
                Ця подорож буде про тебе. Про твої бажання, страхи, надії. Про твоє життя!
                <br/>
                Готова до свого переходу? Ми вже чекаємо на тебе.
                </p>
            </div>
          </div>

      </section>


      <section className="contactUs" id="contactForm">

          <div className="container">
            <div className="row">

              <div className="col-6">
                <img src={`${import.meta.env.VITE_BASE_URL}/images/IMG_7023.JPG`} alt="Заповідник Буша" />
              </div>

              <div className="col-6">

                <h2>
                  Забронюй місце вже зараз!
                </h2>
                <h3>Заповнюй анкетні дані і ми зв’яжемось з тобою найближчим часом</h3>

                <form action="https://formspree.io/f/xldjejjw" method="POST" className="contact-form">
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="fieldWrapper"> 
                        <label htmlFor="form-field-name">Ім'я</label>
                        <input size={1} type="text" name="name" id="form-field-name" placeholder="Ім'я" required />
                    </div>

                    <div className="fieldWrapper"> 
                        <label htmlFor="form-field-email">Email</label>
                        <input size={1} type="email" name="email" id="form-field-email" placeholder="Email" required />
                    </div>

                    <div className="fieldWrapper">       
                        <label htmlFor="phone">Телефон</label>
                        <input size={1} type="tel" name="phone" id="phone" placeholder="Контактний телефон" required pattern="[0-9()#&amp;+*-=.]+" title="Лише цифри та символи телефону (#, -, *, і т.д.) приймаються." />
                    </div> 

                    <div className="fieldWrapper messenger-pick">
                        <label>Зручний месенджер для зв'язку</label>
                        
                        <input type="radio" value="Telegram" id="telegram" name="messenger" /> 
                        <label htmlFor="telegram">Telegram</label>

                        <input type="radio" value="Viber" id="viber" name="messenger" /> 
                        <label htmlFor="viber">Viber</label>

                        <input type="radio" value="Whatsapp" id="whatsapp" name="messenger" /> 
                        <label htmlFor="whatsapp">Whatsapp</label>
                    </div>  

                    <button className="formSubmit" type="submit">Надіслати</button>
                </form>


              </div>       
            </div>
          </div>

      </section>


    </>
  )
}

export default App
