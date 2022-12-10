{
  ("use strict");

  // 画面読み込み前に実行されてエラーになったので100ミリ秒遅延させた。
  setTimeout(function () {
    // 変数storageにlocalStorageを格納
    const storage = localStorage;
    const config = getConfig();
    const main = document.getElementsByTagName("main")[0];
    // 初期設定関係
    if (storage.getItem(config.SYSTEM_KEY.MAIN_FONT_FAMILY) === null) {
      main.style.fontFamily = config.INITIALIZATION.MAIN_FONT_FAMILY;
    }
    if (storage.getItem(config.SYSTEM_KEY.MAIN_FONT_SIZE) === null) {
      main.style.fontSize = config.INITIALIZATION.MAIN_FONT_SIZE;
    }
    // メニュー制御
    const open = document.getElementById("open");
    const menu = document.getElementById("menu");
    const mask = document.getElementById("mask");
    open.addEventListener("click", () => {
      menu.classList.remove("hidden");
      mask.classList.remove("hidden");
      // スクロール禁止付与
      document.addEventListener("touchmove", maskDisableScroll, {
        passive: false,
      });
      document.body.classList.add("overflow-hidden");
    });
    mask.addEventListener("click", () => {
      menu.classList.add("hidden");
      mask.classList.add("hidden");
      // スクロール禁止除去
      document.removeEventListener("touchmove", maskDisableScroll, {
        passive: false,
      });
      document.body.classList.remove("overflow-hidden");
    });

    // スクロール禁止(マスク上)
    function maskDisableScroll(event) {
      if (event.path[0].id === "mask") {
        event.preventDefault();
      }
    }

    // 最終更新日を追記
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent +=
      "(最終更新日時：" +
      dateFomatYYYYMMDDhhmmss(new Date(document.lastModified), "/", ":") +
      ")";

    // 操作パネルの制御
    const operationMenu = document.getElementById("operationMenu");
    const sizeSelect = document.getElementById("sizeSelect");
    const fontSelect = document.getElementById("fontSelect");
    const pageSlide = document.getElementById("pageSlide");
    const pageTop = document.getElementById("pageTop");
    const pageBottom = document.getElementById("pageBottom");
    pageSlide.value = 0;
    pageSlide.max = document.documentElement.scrollHeight;
    main.addEventListener("click", (e) => {
      if (!e.path[0].className.match("operationMenuParts")) {
        operationMenu.classList.toggle("hidden");
      }
    });
    sizeSelect.addEventListener("change", () => {
      main.style.fontSize = sizeSelect.value;
      pageSlide.max = document.documentElement.scrollHeight;
    });
    fontSelect.addEventListener("change", () => {
      main.style.fontFamily = fontSelect.value;
      pageSlide.max = document.documentElement.scrollHeight;
    });
    pageSlide.addEventListener("input", () => {
      window.scrollTo({
        top: pageSlide.value,
      });
    });
    pageTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: -500,
        behavior: "smooth",
      });
    });
    pageBottom.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });

    // ログを設定
    // param text ログに設定するテキスト(\nで改行が可能)
    // return void
    // use) setlog('mvShow');
    function setlog(text) {
        const log = document.getElementById("log");
        log.innerText += `${text}`;
        console.log(text);
      }

  }, 100);
}
