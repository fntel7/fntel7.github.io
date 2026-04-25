// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-data",
          title: "Data",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/data/";
          },
        },{id: "nav-interactive-tools",
          title: "Interactive tools",
          description: "Interactive explorers built around profit shifting estimates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "How to get in touch.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-joined-the-joint-research-centre-european-commission-seville-as-an-economist",
          title: 'Joined the Joint Research Centre (European Commission), Seville, as an Economist.',
          description: "",
          section: "News",},{id: "news-global-evidence-on-profit-shifting-within-firms-and-across-time-published-in-the-journal-of-accounting-and-economics-vol-79-issue-2",
          title: 'Global Evidence on Profit Shifting Within Firms and Across Time published in the...',
          description: "",
          section: "News",},{id: "news-launched-the-interactive-profit-shifting-explorer-country-year-and-industry-year-estimates-from-the-jae-2025-paper-browsable-in-the-browser",
          title: 'Launched the interactive Profit Shifting Explorer — country-year and industry-year estimates from the...',
          description: "",
          section: "News",},{id: "projects-profit-shifting-explorer",
          title: 'Profit Shifting Explorer',
          description: "Interactive country-year and industry-year estimates of profit shifted by MNEs, 2009–2020.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/profit-shifting-explorer/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
