<script>
  const fetchRepos = (async () => {
    const response = await fetch(
      "https://api.github.com/users/n-ckdotcom/repos"
    );
    const repos = await response.json();
    //repos.shift();
    return await repos;
  })();

  const fetchLanguageColors = (async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    );
    return await response.json();
  })();

  function getColor(language, colors) {
    if (language === null) return "#ffffff";
    return [colors[language].color, colors[language].url];
  }
</script>

<div
  class="bg-gradient-to-r from-indigo-500 flex flex-col w-screen h-screen bg-fixed"
>
  <div class=" flex flex-col z-0">
    <h1 class="text-white text-7xl self-start ml-16 mt-28 md:text-9xl">
      Hey! <br /> I'm <u>Niki</u>
    </h1>
    <h2 class="text-white text-2xl self-start ml-16 mt-8 md:text-4xl">
      My public repos:
    </h2>
    {#await fetchRepos}
      <div class="flex items-center justify-center text-white mt-14">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
          role="status"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-white"
            >Loading...</span
          >
        </div>
      </div>
    {:then repos}
      <div
        class="overflow-scroll flex flex-row h-fit w-full z-20 styled-scrollbar ml-2"
      >
        {#await fetchLanguageColors then colors}
          {#each repos as repo}
            <div
              class="bg-white rounded-md p-2 m-4 flex flex-col hover:shadow-lg transition-all min-w-fit"
            >
              <p>{repo.name}</p>

              <p class="text-xs">{repo.html_url}</p>

              <p class="text-sm mb-5">
                {repo.description != null ? repo.description : ""}
              </p>
              <div class="flex felx-row mt-auto justify-between items-end">
                <a
                  class="px-4 py-2 bg-indigo-700 rounded-md text-white"
                  href={repo.html_url}
                  target="_blank">visit</a
                >
                <a
                  target="_blank"
                  href={getColor(repo.language, colors)[1]}
                  style={"color: " + getColor(repo.language, colors)[0] + " ;"}
                  class="font-bold"
                >
                  {repo.language != null ? repo.language : ""}
                </a>
              </div>
            </div>
          {/each}
        {/await}
      </div>
    {:catch}
      <p class="text-red-700">An error occurred!</p>
    {/await}

    <div data-dial-init class="absolute right-5 bottom-5 m-10 z-20">
      <div
        id="speed-dial-menu-click"
        class="flex flex-col items-end hidden mb-4 space-y-2"
      >
        <a
          data-tooltip-target="tooltip-linkedin"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          href="https://www.linkedin.com/in/nikolaus-list-170604273/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3333 3333"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            ><path
              fill="#6875f5"
              d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z"
            /></svg
          >
          <span class="sr-only">Linkedin</span>
        </a>
        <div
          id="tooltip-linkedin"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          LinkedIn
          <div class="tooltip-arrow" data-popper-arrow />
        </div>
        <a
          href="https://github.com/N-ckDotCom"
          data-tooltip-target="tooltip-github"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              transform="scale(64)"
              fill="#6875f5"
            />
          </svg>
          <span class="sr-only">Github</span>
        </a>
        <div
          id="tooltip-github"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          GitHub
          <div class="tooltip-arrow" data-popper-arrow />
        </div>
        <a
          href="https://www.instagram.com/nikilist05/"
          data-tooltip-target="tooltip-instagram"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            fill="#000000"
            viewBox="0 0 19.2 19.2"
            data-name="Instagram w/circle"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill="#6875f5"
              d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"
            /></svg
          >
          <span class="sr-only">Instagram</span>
        </a>
        <div
          id="tooltip-instagram"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Instagram
          <div class="tooltip-arrow" data-popper-arrow />
        </div>
        <a
          href="mailto:nikilist@gmx.at"
          data-tooltip-target="tooltip-mail"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >
            <defs />
            <g
              style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                fill="#6875f5"
                d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 67.511 58.015 c 0 1.8 -1.46 3.26 -3.26 3.26 H 25.749 c -1.8 0 -3.26 -1.46 -3.26 -3.26 V 39.692 L 45 47.34 l 22.511 -7.647 V 58.015 z M 67.511 35.013 L 45 42.66 l -22.511 -7.647 v -3.028 c 0 -1.8 1.46 -3.26 3.26 -3.26 h 38.501 c 1.8 0 3.26 1.46 3.26 3.26 V 35.013 z"
               
              />
            </g>
          </svg>
          <span class="sr-only">E-Mail</span>
        </a>
        <div
          id="tooltip-mail"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          E-Mail
          <div class="tooltip-arrow" data-popper-arrow />
        </div>
      </div>
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-click"
        data-dial-trigger="click"
        aria-controls="speed-dial-menu-click"
        aria-expanded="false"
        class="wave text-white text-xl bg-indigo-500 rounded-3xl flex flex-row px-6 py-3 transition-all focus:bg-white focus:border focus:border-indigo-500 focus:text-indigo-500 focus:px-5"
      >
        <p>👋</p>
        Contact Me
        <span class="sr-only">Open actions menu</span>
      </button>
    </div>
    <!-- <a
      class="wave text-white px-6 py-3 absolute right-5 bottom-5 m-10 text-xl bg-indigo-500 rounded-3xl flex flex-row"
      href="mailto:email@provider.com"
      ><p>👋</p>
      Contact Me</a
    > -->
  </div>
</div>

<style>
  .wave:hover p {
    animation: rotation 0.3s normal linear;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(40deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
