export default function decorate(block) {
  const [tagsWrapper] = block.children;

  const tagsContent = document.createElement('div');
  tagsContent.classList.add('tags-content');

  const metaTags = document.querySelectorAll('meta');

  for (const tag of metaTags) {
    if (tag.getAttribute('name') === 'cq-tags') {
      const content = tag.getAttribute('content');

      tagsContent.textContent = content.trim();
      tagsWrapper.replaceChildren(tagsContent);
    }
  }
}
