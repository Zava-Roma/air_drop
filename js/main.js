const utc = new Date().toJSON().slice(0, 10).replace(/-/g, ".");
let headerDate = document.querySelector(".header__date");
headerDate.innerText = utc;

const ruVersion = `<header class="header">
  <div class="container container_header">
    <div class="header__date">${utc}</div>
    <h1 class="header__title">Как получить $160 на Binance кошелек?</h1>
  </div>
</header>
<main class="page">
  <div class="container">
    <div class="page__text text">
      Открываем Binance, нажимаем на <span>кошелек</span>
    </div>
    <div class="page__img img">
      <img src="./images/1.png" alt="" />
    </div>
    <div class="page__text text">
      Дальше <span>обзор</span>, <span>аккаунты</span>, убираем если стоит
      галочка с <span>скрыть нулевые балансы</span>,ищем
      <span>кошелек DeFi</span>, дальше активируем его если
      он не активирован (все показано на скриншоте ниже)
    </div>
    <div class="page__img2 img">
      <img src="./images/2.png" alt="" />
    </div>
    <div class="page__text text">
      После активации жмем на <span>поиск</span>
    </div>
    <div class="page__img2 img">
      <img src="./images/3.png" alt="" />
    </div>
    <div class="page__text text">
      Прописываем в поиске <span>AIT</span>, нажимаем на нее (внимательно
      выбираем, которая на скриншоте ниже
    </div>
    <div class="page__img2 img">
      <img src="./images/4.png" alt="" />
    </div>
    <div class="page__text text">
      После нажимаем <span>получить</span>
    </div>
    <div class="page__img2 img">
      <img src="./images/5.png" alt="" />
    </div>
    <div class="page__text text">
      И копируем адрес кошелька AIT как показано на скриншоте
    </div>
    <div class="page__img2 img">
      <img src="./images/6.png" alt="" />
    </div>
    <div class="page__text text">
      <div class="inner_text">
        Сохраняем номер кошелька в удобное для вас место, он нам
        понадобится немного позже.
      </div>
      <div class="inner_text">
        Дальше переходим по ссылке в <span>телеграмм бот</span> —
        <a
          target="_blank"
          href="https://t.me/AIT_AIRDROP_BOT?start=XGtQKudyG"
          >https://t.me/AIT_AIRDROP_BOT?start=XGtQKudyG</a
        >
      </div>
      <div class="inner_text">
        Нажимаем <span>СТАРТ</span> (запускаем бота)
      </div>
    </div>
    <div class="page__img img">
      <img src="./images/7.png" alt="" />
    </div>
    <div class="page__text text">
      Дальше вступаем во все телеграмм каналы и группы, которые находятся
      на против <span>Join</span>
    </div>
    <div class="page__img img">
      <img src="./images/8.png" alt="" />
    </div>
    <div class="page__text text">Такие моменты просто пропускаем</div>
    <div class="page__img img">
      <img src="./images/9.png" alt="" />
    </div>
    <div class="page__text text">
      После того, как мы вступили в все каналы и группы (в которые могли
      вступить), скидываем боту свой ник в телеграмме через "@"
    </div>
    <div class="page__img img">
      <img src="./images/10.png" alt="" />
    </div>
    <div class="page__text text">
      <div class="inner_text">
        Дальше внизу там где писать сообщения жмем кнопку
        <span>NEXT</span>
      </div>
      <div class="inner_text">
        После этого отправляем вот эту ссылку боту — (копируйте)
        <a
          target="_blank"
          href="https://twitter.com/iigriksad/status/1687451572601511937?s=20"
          >https://twitter.com/iigriksad/status/1687451572601511937?s=20</a
        >
      </div>
      <div class="inner_text">
        Нажимаем <span>СТАРТ</span> (запускаем бота)
      </div>
      <div class="page__img img">
        <img src="./images/11.png" alt="" />
      </div>
      <div class="page__text text">
        Последний, скидываем боту свой номер кошелька, который
        мы сохранили в самом начале и после этого жмем кнопку 💳Withdraw
      </div>
      <div class="page__img img">
        <img src="./images/12.png" alt="" />
      </div>
      <div class="page__text text">
        Средства начисляться на ваш кошелек через 10-15 минут. После
        листинга вы получите возможность их вывести с кошелька. Листинг
        15 августа. Делимся с друзьями информацией!
      </div>
      <div class="page__img2 img">
         <img src="./images/13.png" alt="" />
       </div>
    </div>
  </div>
</main>
<footer class="footer">
  <div class="container container_footer"></div>
</footer>`;

const engVersion = `<header class="header">
  <div class="container container_header">
    <div class="header__date">${utc}</div>
    <h1 class="header__title">How to get $160 to Binance wallet?</h1>
  </div>
</header>
<main class="page">
  <div class="container">
    <div class="page__text text">
      Open Binance, click on the <span>wallet</span>
    </div>
    <div class="page__img img">
      <img src="./images/1.png" alt="" />
    </div>
    <div class="page__text text">
    Further <span>review</span>, <span>accounts</span>, remove if there is a checkmark with <span>hide zero balances</span>, look for a <span>DeFi wallet</span>, then activate it if it is not activated (everything is shown in the screenshot below)
    </div>
    <div class="page__img2 img">
      <img src="./images/2.png" alt="" />
    </div>
    <div class="page__text text">
    After activation, click on <span>search</span>
    </div>
    <div class="page__img2 img">
      <img src="./images/3.png" alt="" />
    </div>
    <div class="page__text text">
    We write in the search <span>AIT</span>, click on it (carefully select which one is in the screenshot below
    </div>
    <div class="page__img2 img">
      <img src="./images/4.png" alt="" />
    </div>
    <div class="page__text text">
    Then click <span>get</span>
    </div>
    <div class="page__img2 img">
      <img src="./images/5.png" alt="" />
    </div>
    <div class="page__text text">
    And copy the AIT wallet address as shown in the screenshot
    </div>
    <div class="page__img2 img">
      <img src="./images/6.png" alt="" />
    </div>
    <div class="page__text text">
      <div class="inner_text">
      We save the wallet number in a place convenient for you, we will need it a little later.
      </div>
      <div class="inner_text">
      Next, follow the link to  the <span>telegram bot</span> —
        <a
          target="_blank"
          href="https://t.me/AIT_AIRDROP_BOT?start=XGtQKudyG"
          >https://t.me/AIT_AIRDROP_BOT?start=XGtQKudyG</a
        >
      </div>
      <div class="inner_text">
      Press <span>START</span> (start the bot)
      </div>
    </div>
    <div class="page__img img">
      <img src="./images/7.png" alt="" />
    </div>
    <div class="page__text text">
    Then we enter all telegram channels and groups that are opposite <span>Join</span>
    </div>
    <div class="page__img img">
      <img src="./images/8.png" alt="" />
    </div>
    <div class="page__text text">We just miss those moments.</div>
    <div class="page__img img">
      <img src="./images/9.png" alt="" />
    </div>
    <div class="page__text text">
    After we have joined all the channels and groups (which we could join), we throw off our nickname in the telegram to the bot through "@"
    </div>
    <div class="page__img img">
      <img src="./images/10.png" alt="" />
    </div>
    <div class="page__text text">
      <div class="inner_text">
      Further down, where to write messages, press the
        <span>NEXT</span> button
      </div>
      <div class="inner_text">
      After that, we send this link to the bot - (copy)
        <a
          target="_blank"
          href="https://twitter.com/iigriksad/status/1687451572601511937?s=20"
          >https://twitter.com/iigriksad/status/1687451572601511937?s=20</a
        >
      </div>
      <div class="inner_text">
      Press <span>START</span> (start the bot)
      </div>
      <div class="page__img img">
        <img src="./images/11.png" alt="" />
      </div>
      <div class="page__text text">
      Last, we throw off our wallet number to the bot, which we saved at the very beginning and after that we press the button 💳Withdraw
      </div>
      <div class="page__img img">
        <img src="./images/12.png" alt="" />
      </div>
      <div class="page__text text">
      Funds will be credited to your wallet in 10-15 minutes. After listing, you will be able to withdraw them from your wallet. Listing August 15th. Share information with friends!
      </div>
      <div class="page__img2 img">
         <img src="./images/13.png" alt="" />
       </div>
    </div>
  </div>
</main>`;

const wrapper = document.querySelector(".wrapper");
const ruBtn = document.querySelector("#ru");
const engBtn = document.querySelector("#eng");

engBtn.onclick = () => {
  wrapper.innerHTML = engVersion;
};
ruBtn.onclick = () => {
  wrapper.innerHTML = ruVersion;
};
