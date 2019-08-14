$( document ).ready(function() {
  var scroll = new SmoothScroll('.nav-link');

  let counter = 1;

  const strings = [
    "<strong>Tell us your budget, goals, and we’ll do the rest.</strong> Our unlimited tier even handles building creative and writing copy!",
    "Your project is automatically reviewed & assigned to a paid ads specialist by our AI. They’ll gear up and launch campaigns so <strong>you see results in less than a week.</strong> ",
    "See all your results in our internal AdsPanda dashboard — total ad spend, aggregate impressions, and cost per acquisition. <strong>Focus on your company, we’ll handle the growth.</strong>",
    "Not happy with your ads? Looking to explore other channels? Stop AdPandas whenever you like — <strong>no long-term contract.</strong>"
  ]

  $("*").on("click", (e) => {
    if(e.target.className.includes("tree-text")) {
       e.preventDefault();
       const step = $(e.target).data("step");
       $("#tree").attr('src',`assets/images/tree${step+1}.svg`);
       $("#tree-description-text").html(strings[step]);
     }
  })
});
