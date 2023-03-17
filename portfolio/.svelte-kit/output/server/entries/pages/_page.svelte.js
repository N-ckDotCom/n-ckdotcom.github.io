import { c as create_ssr_component, i as is_promise, n as noop, d as each, e as escape, f as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wave.svelte-y7275i:hover p.svelte-y7275i{animation:svelte-y7275i-rotation 0.3s normal linear}@keyframes svelte-y7275i-rotation{0%{transform:rotate(0deg)}50%{transform:rotate(40deg)}100%{transform:rotate(0deg)}}",
  map: null
};
function getColor(language, colors) {
  if (language === null)
    return "#ffffff";
  return [colors[language].color, colors[language].url];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fetchRepos = (async () => {
    const response = await fetch("https://api.github.com/users/n-ckdotcom/repos");
    const repos = await response.json();
    repos.shift();
    return await repos;
  })();
  const fetchLanguageColors = (async () => {
    const response = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json");
    return await response.json();
  })();
  $$result.css.add(css);
  return `<div class="bg-gradient-to-r from-indigo-500 flex flex-col w-screen h-screen bg-fixed"><div class="self-center mt-32 text-4xl flex flex-col items-center"></div>
  <div class="flex flex-col fixed top-0 left-0 z-0"><h1 class="text-white text-9xl self-start ml-16 mt-28">Hej! <br> I&#39;m <u>Niki</u></h1>
    <h2 class="text-white text-4xl self-start ml-16 mt-8 ">My public repos:</h2>
    ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
      <div class="flex items-center justify-center text-white mt-14"><div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white" role="status"><span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-white">Loading...</span></div></div>
    `;
    }
    return function(repos) {
      return `
      <div class="flex flex-row ml-10">${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(colors) {
          return `
          ${each(repos, (repo) => {
            return `<div class="bg-white rounded-md p-2 m-4 flex flex-col hover:shadow-lg transition-all"><p>${escape(repo.name)}</p>

              <p class="text-xs">${escape(repo.html_url)}</p>

              <p class="text-sm mb-5">${escape(repo.description != null ? repo.description : "")}</p>
              <div class="flex felx-row mt-auto justify-between items-end "><a class="px-4 py-2 bg-indigo-700 rounded-md text-white"${add_attribute("href", repo.html_url, 0)} target="_blank">visit</a>
                <a target="_blank"${add_attribute("href", getColor(repo.language, colors)[1], 0)}${add_attribute("style", "color: " + getColor(repo.language, colors)[0] + " ;", 0)} class="font-bold ">${escape(repo.language != null ? repo.language : "")}
                </a></div>
            </div>`;
          })}
        `;
        }(__value2);
      }(fetchLanguageColors)}</div>
    `;
    }(__value);
  }(fetchRepos)}</div>
  <a class="wave text-white px-6 py-3 absolute right-5 bottom-5 m-10 text-xl bg-indigo-500 rounded-3xl flex flex-row svelte-y7275i" href="mailto:email@provider.com"><p class="svelte-y7275i">👋</p>
    Contact Me</a>
</div>`;
});
export {
  Page as default
};
