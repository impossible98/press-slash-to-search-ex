// 自带 Press / to Search
// google.com
// youtube.com

// www.bilibili.com
if (location.host.includes('www.bilibili.com')) {
  handleKeydown('.nav-search-input');
}
// www.douyu.com
else if (location.host.includes('www.douyu.com')) {
  handleKeydown('#header-search-input.Search-text');
}

function handleKeydown(query: string) {
  let form: HTMLInputElement | null = document.querySelector(
    query,
  ) as HTMLInputElement;
  document.documentElement.addEventListener('keydown', (event) => {
    if (event.key !== '/') {
      return undefined;
    }
    if (!form) {
      form = document.querySelector(query) as HTMLInputElement;
      if (!form) {
        return undefined;
      }
    }
    form.focus();
    event.preventDefault();
    const tempv: string = form.value;
    form.value = '';
    form.value = tempv;
  });
}
