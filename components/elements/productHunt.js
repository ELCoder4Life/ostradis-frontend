export default function ProductHunt() {
  //replace your product hunt link
  return (
    <div className="flex justify-center mb-8">
      <div
        dangerouslySetInnerHTML={{
          __html: `
<a href="https://www.producthunt.com/posts/pagepe-turn-domains-into-magic?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pagepe&#0045;turn&#0045;domains&#0045;into&#0045;magic" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=406447&theme=light" alt="PagePe&#0032;&#0045;&#0032;Turn&#0032;Domains&#0032;into&#0032;Magic - Turn&#0032;Domains&#0032;into&#0032;Content&#0032;Website&#0032;in&#0032;less&#0032;than&#0032;60&#0032;seconds | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
`,
        }}
      />
    </div>
  );
}
