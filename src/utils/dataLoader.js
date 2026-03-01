export async function loadData() {
  const categories = await fetch("/data/categories.json").then(r => r.json());
  const sections = await fetch("/data/sections.json").then(r => r.json());
  const articles = await fetch("/data/articles.json").then(r => r.json());

  return { categories, sections, articles };
}
