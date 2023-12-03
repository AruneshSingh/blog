import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  }
      
  export default ((userOpts?: Options) => {
    const opts = { ...userOpts}
    function Discussion(props: QuartzComponentProps) {
      return <>
                <script src="https://giscus.app/client.js"
                    data-repo="AruneshSingh/blog"
                    data-repo-id="R_kgDOK0u8JA"
                    data-category="Blog discussions"
                    data-category-id="DIC_kwDOK0u8JM4CbdoN"
                    data-mapping="title"
                    data-strict="0"
                    data-reactions-enabled="1"
                    data-emit-metadata="0"
                    data-input-position="bottom"
                    data-theme="preferred_color_scheme"
                    data-lang="en"
                    crossorigin="anonymous"
                    async>
                </script>
             </>
    }
   
    return Discussion
  }) satisfies QuartzComponentConstructor