(function () {
  var PASSWORD = "builes.carlos";
  var STORAGE_KEY = "site_unlocked_v1";

  if (localStorage.getItem(STORAGE_KEY) === "1") return;

  document.documentElement.style.visibility = "hidden";

  document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.createElement("div");
    overlay.style.cssText =
      "position:fixed;inset:0;background:#0f172a;color:#fff;display:flex;" +
      "align-items:center;justify-content:center;z-index:2147483647;" +
      "font-family:system-ui,-apple-system,sans-serif;";
    overlay.innerHTML =
      '<form id="gate-form" style="background:#1e293b;padding:2rem;border-radius:12px;width:90%;max-width:320px;box-shadow:0 10px 40px rgba(0,0,0,.4);">' +
      '<label style="display:block;margin-bottom:.75rem;font-size:.95rem;">Contraseña</label>' +
      '<input id="gate-input" type="password" autocomplete="off" style="width:100%;padding:.6rem .75rem;border-radius:8px;border:1px solid #334155;background:#0f172a;color:#fff;font-size:1rem;box-sizing:border-box;">' +
      '<button type="submit" style="width:100%;margin-top:1rem;padding:.6rem;border:none;border-radius:8px;background:#6366f1;color:#fff;font-weight:600;cursor:pointer;">Entrar</button>' +
      '<div id="gate-error" style="color:#f87171;font-size:.85rem;margin-top:.6rem;display:none;">Contraseña incorrecta</div>' +
      "</form>";
    document.body.appendChild(overlay);
    document.documentElement.style.visibility = "visible";

    var form = document.getElementById("gate-form");
    var input = document.getElementById("gate-input");
    var error = document.getElementById("gate-error");
    input.focus();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === PASSWORD) {
        localStorage.setItem(STORAGE_KEY, "1");
        overlay.remove();
      } else {
        error.style.display = "block";
        input.value = "";
        input.focus();
      }
    });
  });
})();
