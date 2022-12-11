{
  ("use strict");

  // 画面読み込み前に実行されてエラーになったので100ミリ秒遅延させた。
  setTimeout(function () {
    // 変数storageにlocalStorageを格納
    const storage = localStorage;
    const config = getConfig();
    const main = document.getElementsByTagName("main")[0];
    // 初期設定関係
    const mainFontFamily = storage.getItem(config.SYSTEM_KEY.MAIN_FONT_FAMILY);
    main.style.fontFamily = (mainFontFamily === null) ? config.INITIALIZATION.MAIN_FONT_FAMILY: mainFontFamily;
    const mainFontSize = storage.getItem(config.SYSTEM_KEY.MAIN_FONT_SIZE);
    main.style.fontSize = (mainFontSize === null) ? config.INITIALIZATION.MAIN_FONT_SIZE: mainFontSize;
    const fontSelect = document.getElementById("fontSelect");
    const sizeSelect = document.getElementById("sizeSelect");
    for (const [key, obj] of Object.entries(Array.from(fontSelect.options))) {
      if ((obj.value).match(main.style.fontFamily)) {
        fontSelect.selectedIndex = key;
      }
    }
    for (const [key, obj] of Object.entries(Array.from(sizeSelect.options))) {
      if ((obj.value).match(main.style.fontSize)) {
        sizeSelect.selectedIndex = key;
      }
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
    const pageSlide = document.getElementById("pageSlide");
    const pageTop = document.getElementById("pageTop");
    const pageBottom = document.getElementById("pageBottom");
    pageSlide.value = -500;
    pageSlide.max = document.documentElement.scrollHeight;
    main.addEventListener("dblclick", (e) => {
      setlog('main dblclick.\n');
      operationMenu.classList.toggle("hidden");
    });
    sizeSelect.addEventListener("change", () => {
      setlog('sizeSelect change.\n');
      main.style.fontSize = sizeSelect.value;
      pageSlide.max = document.documentElement.scrollHeight;
      storage.setItem(config.SYSTEM_KEY.MAIN_FONT_SIZE, sizeSelect.value);
    });
    fontSelect.addEventListener("change", () => {
      setlog('fontSelect change.\n');
      main.style.fontFamily = fontSelect.value;
      pageSlide.max = document.documentElement.scrollHeight;
      storage.setItem(config.SYSTEM_KEY.MAIN_FONT_FAMILY, fontSelect.value);
    });
    pageSlide.addEventListener("input", () => {
      setlog('pageSlide input.\n');
      window.scrollTo({
        top: pageSlide.value,
      });
    });
    pageTop.addEventListener("click", (e) => {
      setlog('pageTop click.\n');
      e.preventDefault();
      window.scrollTo({
        top: -500,
        behavior: "smooth",
      });
    });
    pageBottom.addEventListener("click", (e) => {
      setlog('pageBottom click.\n');
      e.preventDefault();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });

    // ログを設定
    // param text ログに設定するテキスト(\nで改行が可能)
    // return void
    // use) setlog('mvShow\n');
    function setlog(text) {
        const log = document.getElementById("log");
        log.innerText += `${text}`;
        console.log(text);
      }

  }, 100);
}
