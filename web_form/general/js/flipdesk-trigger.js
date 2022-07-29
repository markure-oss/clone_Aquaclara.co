setTimeout(function () {
  const target = document.getElementById("flipdesk-trigger");

  if (target !== null) {
    // バナーがないページでエラーが出ないように。
    const observer = new MutationObserver((mutations) => {
      if (target.style.display === "block") {
        gtag("event", "popup", {
          event_category: "flipdesk",
          event_label: "banner",
          non_interaction: true,
        });
      }
    });

    observer.observe(target, {
      attributes: true,
      attributeFilter: ["style"],
      attributeOldValue: true,
    });
  }
}, 5000);
